import React from 'react';
import {createRoot} from 'react-dom/client';
import {ArrowRight,ShieldCheck,LockKeyhole,TrendingUp,CreditCard,Wallet,Clock,UserRound,Eye,EyeOff,Headphones} from 'lucide-react';
import './style.css';

function Pay101Logo(){return <div className="logo-card"><img src="https://raw.githubusercontent.com/kartikmishra543/pay101-demo/main/public/assets/pay101-logo.png" alt="Pay101" /></div>}
function App(){
 const [show,S]=React.useState(false),[remember,R]=React.useState(false),[merchant,M]=React.useState(''),[password,P]=React.useState(''),[notice,N]=React.useState('');
 function submit(e){e.preventDefault();N('Demo only — sign-in is not connected to a live merchant account.')}
 return <div className="page">
  <header><Pay101Logo/><div className="topright">Merchant support <a href="mailto:support@pay101.uk">Contact us <ArrowRight size={15}/></a></div></header>
  <main>
   <section className="intro">
    <div className="eyebrow">● MERCHANT PORTAL</div>
    <h1>Payments made<br/><em>clearer.</em></h1>
    <h2 className="grow-title">Grow Your Business</h2>
    <p className="lead">Accept payments seamlessly and scale effortlessly.</p>
    <div className="feature-list">
     <div className="feature"><span className="feature-icon"><TrendingUp/></span><div><h3>Instant Settlements</h3><p>Receive payments directly to your bank account within 24 hours</p></div></div>
     <div className="feature"><span className="feature-icon"><CreditCard/></span><div><h3>Accept All Payment Methods</h3><p>UPI, Credit/Debit Cards, Net Banking, Wallets &amp; more</p></div></div>
     <div className="feature"><span className="feature-icon"><Wallet/></span><div><h3>Simple Dashboard</h3><p>Track all transactions, settlements and reports in one place</p></div></div>
     <div className="feature"><span className="feature-icon"><Clock/></span><div><h3>Dedicated Support</h3><p>Get help anytime with our 24/7 merchant support team</p></div></div>
    </div>
    <div className="benefits"><span><ShieldCheck/> Secure account access</span><span><Headphones/> Merchant support</span></div>
    <div className="trust-note">© 2026 Pay101. Trusted by 10,000+ merchants</div>
   </section>
   <section className="card">
    <div className="login-heading"><h2>Merchant Portal</h2><p className="sub">Sign in to continue</p></div>
    <form onSubmit={submit}>
     <label className="sr-label" htmlFor="merchant">Merchant ID</label>
     <div className="field"><UserRound/><input id="merchant" autoComplete="username" placeholder="Merchant ID" value={merchant} onChange={e=>M(e.target.value)} required/></div>
     <label className="sr-label" htmlFor="password">Password</label>
     <div className="field"><LockKeyhole/><input id="password" autoComplete="current-password" type={show?'text':'password'} placeholder="Password" value={password} onChange={e=>P(e.target.value)} required/><button type="button" className="eye" onClick={()=>S(!show)} aria-label="Toggle password visibility">{show?<EyeOff/>:<Eye/>}</button></div>
     <div className="login-options"><label className="remember"><input type="checkbox" checked={remember} onChange={e=>R(e.target.checked)}/> Remember</label><a href="mailto:support@pay101.uk?subject=Password%20reset">Forgot?</a></div>
     <button className="submit">Sign In</button>{notice&&<p className="notice">{notice}</p>}
    </form>
    <div className="support-links"><p>New merchant? <a href="mailto:sales@pay101.uk">Contact Sales</a></p><p>Need help? <a href="mailto:support@pay101.uk">Support</a></p></div>
   </section>
  </main>
  <footer><span>© 2026 Pay101 · Merchant portal demo</span><div><a href="mailto:support@pay101.uk">Help &amp; support</a><span>UI preview only</span></div></footer>
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);