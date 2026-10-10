import React from 'react';
import {createRoot} from 'react-dom/client';
import {ArrowRight,ShieldCheck,LockKeyhole,TrendingUp,CreditCard,Wallet,Clock,UserRound,Eye,EyeOff,Headphones} from 'lucide-react';
import './style.css';

function Pay101Logo(){return <div className="logo-card"><img src="https://raw.githubusercontent.com/kartikmishra543/pay101-demo/main/public/assets/pay101-logo.png" alt="Pay101" /></div>}
function App(){
 const [show,S]=React.useState(false),[remember,R]=React.useState(false),[merchant,M]=React.useState(''),[password,P]=React.useState(''),[notice,N]=React.useState('');
 const [currencyIndex,setCurrencyIndex]=React.useState(0);
 const currencies=[
  {code:'BTN',country:'Bhutan',amount:'Nu. 184,290',bars:[24,36,31,52,45,68,56,79,65,91,73,100]},
  {code:'NPR',country:'Nepal',amount:'रू 18,42,900',bars:[30,42,35,58,48,73,61,86,69,96,81,100]},
  {code:'AED',country:'United Arab Emirates',amount:'د.إ 184,290',bars:[22,33,49,39,62,54,76,64,83,72,91,100]},
  {code:'AUD',country:'Australia',amount:'A$ 184,290',bars:[28,38,32,56,47,66,58,80,68,89,77,100]},
  {code:'USD',country:'International example',amount:'$ 184,290',bars:[25,40,34,53,48,70,60,82,71,93,80,100]},
  {code:'INR',country:'India',amount:'₹ 1,84,290',bars:[32,44,39,62,57,81,76,96,83,90,74,100]}
 ];
 React.useEffect(()=>{const timer=setInterval(()=>setCurrencyIndex(i=>(i+1)%currencies.length),5000);return ()=>clearInterval(timer)},[]);
 const currentCurrency=currencies[currencyIndex];
 function submit(e){e.preventDefault();N('Demo only — sign-in is not connected to a live merchant account.')}
 return <div className="page">
  <header><Pay101Logo/><div className="topright">Merchant support <a href="mailto:support@pay101.uk">Contact us <ArrowRight size={15}/></a></div></header>
  <main>
   <section className="intro">
    <div className="eyebrow">● MERCHANT PORTAL</div>
    <h1>Payments made<br/><em>clearer.</em></h1>
    <h2 className="grow-title">Grow Your Business</h2>
    <p className="lead">Accept payments seamlessly and scale effortlessly.</p>
    <div className="merchant-chart-card" aria-label="Illustrative merchant payment graph">
     <div className="merchant-chart-head"><div><span>MERCHANT OVERVIEW</span><h3>Payment activity</h3></div><small><i/> Demo view</small></div>
     <div className="merchant-chart-stats">
      <div><span>Example payment volume</span><strong key={currentCurrency.code}>{currentCurrency.amount}</strong><small>{currentCurrency.country} · {currentCurrency.code}</small></div>
      <div><span>Workspace</span><strong>Merchant</strong><small>Payments and transfers</small></div>
     </div>
     <div className="merchant-chart-label"><span>Transaction activity</span><small>Illustrative data</small></div>
     <div className="merchant-bars" key={currentCurrency.code}>{currentCurrency.bars.map((height,i)=><i key={i} style={{height:height+'%'}} title={'Sample period '+(i+1)}/>)}</div>
     <div className="merchant-chart-footer"><span><i/> Payment monitoring</span><span>PAY101 PORTAL</span></div>
     <div className="merchant-currency-select" aria-label="Choose currency example">{currencies.map((item,i)=><button type="button" key={item.code} onClick={()=>setCurrencyIndex(i)} className={i===currencyIndex?'active':''} aria-label={'Show '+item.country+' currency'}>{item.code}</button>)}</div>
    </div>
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
