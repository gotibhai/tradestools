export default function Home() {
  return (
    <>
      <nav>
        <div className="container nav-inner">
          <a href="/" className="logo">TradesTools</a>
          <ul className="nav-links">
            <li><a href="#tools">Tools</a></li>
            <li><a href="#templates">Templates</a></li>
            <li><a href="#articles">Articles</a></li>
          </ul>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="container">
            <span className="hero-badge">Free tools for tradespeople</span>
            <h1>Know your numbers.<br />Get paid faster.</h1>
            <p>
              Simple spreadsheets and calculators built for contractors, 
              plumbers, electricians, and anyone who works with their hands.
            </p>
            <div className="btn-group">
              <a href="#templates" className="btn btn-primary">Browse Templates</a>
              <a href="#calculator" className="btn btn-secondary">Try the Calculator</a>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="features" id="tools">
          <div className="container">
            <div className="features-header">
              <h2>Built for how you actually work</h2>
              <p>No apps to learn. No subscriptions. Just spreadsheets that work.</p>
            </div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Know Your Real Hourly Rate</h3>
                <p>
                  Most contractors charge $50/hr but need $85/hr to actually profit. 
                  Our calculator shows your true cost including truck, insurance, tools, and taxes.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📝</div>
                <h3>Quote vs Actual Tracking</h3>
                <p>
                  See which jobs made money and which didn't. Learn that you always 
                  underestimate electrical by 30% — before it kills your margins.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💰</div>
                <h3>Get Paid On Time</h3>
                <p>
                  Professional invoices with clear terms. Track who owes what. 
                  Stop chasing payments with awkward phone calls.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Templates */}
        <section className="products" id="templates">
          <div className="container">
            <div className="products-header">
              <h2>Templates that pay for themselves</h2>
              <p>One recovered late payment covers the cost 10x over.</p>
            </div>
            <div className="products-grid">
              <div className="product-card">
                <h3>Contractor Quote Template</h3>
                <p>Professional estimates that win jobs and set clear expectations.</p>
                <div className="price">$15 <span>one-time</span></div>
                <ul>
                  <li>Material cost breakdown</li>
                  <li>Labor hour estimates</li>
                  <li>Built-in profit margin calculator</li>
                  <li>Terms & conditions included</li>
                </ul>
                <a href="#" className="btn btn-primary" style={{width: '100%'}}>Get Template</a>
              </div>
              <div className="product-card">
                <h3>Job Profitability Tracker</h3>
                <p>Know exactly which jobs make money — and which ones don't.</p>
                <div className="price">$19 <span>one-time</span></div>
                <ul>
                  <li>Quote vs actual comparison</li>
                  <li>Time tracking per job</li>
                  <li>Material cost logging</li>
                  <li>Profit margin dashboard</li>
                </ul>
                <a href="#" className="btn btn-primary" style={{width: '100%'}}>Get Template</a>
              </div>
              <div className="product-card">
                <h3>Complete Business Bundle</h3>
                <p>Everything you need to run the business side of your trade.</p>
                <div className="price">$49 <span>one-time</span></div>
                <ul>
                  <li>All templates included</li>
                  <li>Quote & invoice templates</li>
                  <li>Job tracker + expense log</li>
                  <li>True hourly rate calculator</li>
                </ul>
                <a href="#" className="btn btn-primary" style={{width: '100%'}}>Get Bundle</a>
              </div>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="articles" id="articles">
          <div className="container">
            <div className="articles-header">
              <h2>Learn the business side</h2>
              <p>Practical advice for tradespeople who'd rather be working than doing paperwork.</p>
            </div>
            <div className="articles-grid">
              <a href="#" className="article-card">
                <div className="article-card-body">
                  <div className="category">Pricing</div>
                  <h3>How to Calculate Your True Hourly Rate</h3>
                  <p>Why charging $50/hr might mean you're losing money on every job.</p>
                </div>
              </a>
              <a href="#" className="article-card">
                <div className="article-card-body">
                  <div className="category">Getting Paid</div>
                  <h3>The Invoice Terms That Actually Get You Paid</h3>
                  <p>Small changes to your invoice that dramatically reduce late payments.</p>
                </div>
              </a>
              <a href="#" className="article-card">
                <div className="article-card-body">
                  <div className="category">Quoting</div>
                  <h3>Stop Underquoting Jobs (A Simple System)</h3>
                  <p>Track one number after every job and watch your estimates improve.</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <span style={{color: 'var(--text-secondary)', fontSize: '0.875rem'}}>
            © 2026 TradesTools
          </span>
          <ul className="footer-links">
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy</a></li>
          </ul>
        </div>
      </footer>
    </>
  )
}
