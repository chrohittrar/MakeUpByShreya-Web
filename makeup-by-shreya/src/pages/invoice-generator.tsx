import { useMemo, useRef, useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { ArrowLeft, Download, LoaderCircle, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import waxStamp from "../assets/invoice-wax-stamp.png";
import "./invoice-generator.css";

type LineItem = {
  id: number;
  description: string;
  quantity: number;
  price: number;
};

const today = new Date().toISOString().slice(0, 10);

const formatMoney = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value);

const formatDate = (value: string) => {
  if (!value) return "";
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${value}T12:00:00`));
};

const safeFileName = (name: string, invoiceNumber: string) => {
  const clean = `${name || "Client"}-${invoiceNumber || "Invoice"}`
    .replace(/[^a-z0-9-]+/gi, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  return `${clean || "Invoice"}.pdf`;
};

const InvoiceGenerator = () => {
  const previewRef = useRef<HTMLDivElement>(null);
  const itemId = useRef(3);
  const [invoiceNumber, setInvoiceNumber] = useState("16S90/2026");
  const [invoiceDate, setInvoiceDate] = useState(today);
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [gstin, setGstin] = useState("");
  const [taxRate, setTaxRate] = useState(0);
  const [note, setNote] = useState("Thank you :)");
  const [items, setItems] = useState<LineItem[]>([
    { id: 1, description: "", quantity: 1, price: 0 },
  ]);
  const [downloading, setDownloading] = useState(false);

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity * item.price, 0),
    [items],
  );
  const tax = subtotal * (taxRate / 100);
  const total = subtotal + tax;

  const updateItem = (id: number, patch: Partial<LineItem>) => {
    setItems((current) =>
      current.map((item) => (item.id === id ? { ...item, ...patch } : item)),
    );
  };

  const addItem = () => {
    setItems((current) => [
      ...current,
      { id: itemId.current++, description: "", quantity: 1, price: 0 },
    ]);
  };

  const removeItem = (id: number) => {
    setItems((current) =>
      current.length === 1 ? current : current.filter((item) => item.id !== id),
    );
  };

  const downloadPdf = async () => {
    if (!previewRef.current || downloading) return;
    setDownloading(true);
    try {
      await document.fonts.ready;
      const canvas = await html2canvas(previewRef.current, {
        scale: 2,
        backgroundColor: "#f8f7f2",
        useCORS: true,
        logging: false,
      });
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
      pdf.addImage(canvas.toDataURL("image/jpeg", 0.96), "JPEG", 0, 0, 210, 297);
      pdf.save(safeFileName(clientName, invoiceNumber));
    } finally {
      setDownloading(false);
    }
  };

  return (
    <main className="invoice-workspace">
      <header className="invoice-toolbar">
        <div>
          <Link to="/" className="invoice-back"><ArrowLeft size={16} /> Back to website</Link>
          <h1>Invoice studio</h1>
          <p>Fill in the details. Your invoice updates instantly.</p>
        </div>
        <button className="invoice-download" onClick={downloadPdf} disabled={downloading}>
          {downloading ? <LoaderCircle className="invoice-spinner" size={18} /> : <Download size={18} />}
          {downloading ? "Preparing PDF..." : "Download PDF"}
        </button>
      </header>

      <div className="invoice-layout">
        <section className="invoice-form" aria-label="Invoice details">
          <div className="form-section">
            <div className="form-section-heading"><span>01</span><div><h2>Invoice details</h2><p>Reference and issue date</p></div></div>
            <div className="form-grid two-columns">
              <label>Invoice number<input value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} /></label>
              <label>Invoice date<input type="date" value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)} /></label>
            </div>
          </div>

          <div className="form-section">
            <div className="form-section-heading"><span>02</span><div><h2>Client details</h2><p>GSTIN is optional</p></div></div>
            <div className="form-grid">
              <label>Company / client name<input placeholder="e.g. PAC Cosmetics Pvt. Ltd." value={clientName} onChange={(e) => setClientName(e.target.value)} /></label>
              <label>Billing address<textarea rows={4} placeholder="Full billing address" value={clientAddress} onChange={(e) => setClientAddress(e.target.value)} /></label>
              <label>GSTIN <small>Optional</small><input placeholder="e.g. 27AAKCP9848A1Z3" value={gstin} onChange={(e) => setGstin(e.target.value.toUpperCase())} /></label>
            </div>
          </div>

          <div className="form-section">
            <div className="form-section-heading"><span>03</span><div><h2>Items</h2><p>Add services or products</p></div></div>
            <div className="item-editor-list">
              {items.map((item, index) => (
                <div className="item-editor" key={item.id}>
                  <div className="item-editor-title"><strong>Item {index + 1}</strong><button onClick={() => removeItem(item.id)} aria-label={`Remove item ${index + 1}`} disabled={items.length === 1}><Trash2 size={16} /></button></div>
                  <label>Description<input placeholder="Product or service description" value={item.description} onChange={(e) => updateItem(item.id, { description: e.target.value })} /></label>
                  <div className="form-grid two-columns">
                    <label>Quantity<input type="number" min="0" step="1" value={item.quantity} onChange={(e) => updateItem(item.id, { quantity: Number(e.target.value) })} /></label>
                    <label>Unit price (₹)<input type="number" min="0" step="0.01" value={item.price || ""} placeholder="0" onChange={(e) => updateItem(item.id, { price: Number(e.target.value) })} /></label>
                  </div>
                </div>
              ))}
            </div>
            <button className="add-item" onClick={addItem}><Plus size={17} /> Add another item</button>
          </div>

          <div className="form-section">
            <div className="form-section-heading"><span>04</span><div><h2>Totals & note</h2><p>Tax can stay at zero</p></div></div>
            <div className="form-grid two-columns">
              <label>Tax rate (%)<input type="number" min="0" max="100" step="0.01" value={taxRate} onChange={(e) => setTaxRate(Number(e.target.value))} /></label>
              <label>Closing note<input value={note} onChange={(e) => setNote(e.target.value)} /></label>
            </div>
          </div>
        </section>

        <section className="invoice-preview-column" aria-label="Invoice preview">
          <div className="preview-label"><span>Live preview</span><span>A4 · PDF ready</span></div>
          <div className="invoice-preview-shell">
            <div className="invoice-sheet" ref={previewRef}>
              <div className="sheet-content">
                <div className="invoice-head">
                  <div className="invoice-brand"><img src={logo} alt="Makeup by Shreya" /><>INVOICE</></div>
                  <div className="invoice-meta"><p>Invoice No. {invoiceNumber || "—"}</p><p>{formatDate(invoiceDate)}</p></div>
                </div>

                <div className="invoice-client-row">
                  <div className="invoice-client"><h3>BILLED TO:</h3><strong>{clientName || "CLIENT / COMPANY NAME"}</strong><p>{clientAddress || "Client billing address"}</p>{gstin && <b>GSTIN : {gstin}</b>}</div>
                  <img className="invoice-seal" src={waxStamp} alt="Floral wax seal" />
                </div>

                <table className="invoice-table">
                  <thead><tr><th>Item</th><th>Quantity</th><th>Unit<br />Price</th><th>Total</th></tr></thead>
                  <tbody>{items.map((item) => <tr key={item.id}><td>{item.description || "Item description"}</td><td>{item.quantity}</td><td>{formatMoney(item.price)}</td><td>{formatMoney(item.quantity * item.price)}</td></tr>)}</tbody>
                </table>

                <div className="invoice-summary">
                  <div><span>Subtotal</span><span>{formatMoney(subtotal)}</span></div>
                  <div><strong>Tax ({taxRate || 0}%)</strong><span>{formatMoney(tax)}</span></div>
                  <div className="invoice-total"><strong>Total</strong><strong>{formatMoney(total)}</strong></div>
                </div>

                <p className="invoice-thanks">{note}</p>
                <div className="invoice-bottom">
                  <div className="payment-info"><h3><strong>PAYMENT INFORMATION</strong></h3><p>SBI<br />Account Name: Shreya Singh<br />Account No.: 40454736579<br />IFSC Code: SBIN0003772<br />PAN Card : OPCPS4952A</p><p className="upi">UPI ID : 31shreya.s@oksbi</p></div>
                  <div className="issuer"><strong>Shreya Singh</strong><p>Billing Address: Delhi - 110074</p></div>
                </div>
              </div>
              <div className="invoice-footer"><span>🌐 makeupbyshreya.com</span></div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default InvoiceGenerator;
