// Markup of the invitation (converted from the original page).
export default function Page() {
  return (
    <>
      <div id="opening">
        <video id="opening-video" src="assets/opening-video.mp4" muted playsInline preload="auto"></video>
        <button className="open-invitation-btn" id="open-invitation-btn">Open Invitation</button>
        <button className="skip-btn" id="skip-btn">Skip</button>
      </div>

      <section id="hero" className="bg-section">
        <div className="overlay"></div>
        <div className="particles"></div>
        <div className="content hero-inner">
          <div className="eyebrow reveal" style={{ marginBottom: '1rem', letterSpacing: '.3em' }}>
            ॥ શ્રી ગણેશાય નમઃ ॥
          </div>
          <h1 className="reveal">
            {" Patel Krishna "}
            <span className="amp">&amp;</span>
            {" Patel Abhi "}
          </h1>
          <div className="names reveal">Two hearts, two souls, one beautiful journey begins</div>
          <div className="date-pill reveal">
            {"Monday, 23 November 2026 · 3:00 PM · Pattan, Lunawada"}
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll</span>
          <span className="arrow">↓</span>
          <div className="line"></div>
        </div>
      </section>

      <section id="family" className="bg-section">
        <div className="overlay"></div>
        <div className="content">
          <h2 className="section-title reveal">With Heartfelt Joy</h2>
          <p className="section-sub reveal">Together with our families, we joyfully invite you to celebrate our Engagement</p>
          <div className="couples-grid stagger-group" style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div className="couple-card">
              <div className="eyebrow">The Bride</div>
              <div className="person">
                <h3>Patel Krishna<br />Sunderbhai</h3>
                <p>{"Daughter of"}</p>
                <p style={{ fontWeight: '600', color: 'var(--burgundy)', marginTop: '0.4rem', fontStyle: 'normal' }}>
                  {"Mr. Patel Sunderbhai Chandubhai"}
                </p>
                <p style={{ fontWeight: '600', color: 'var(--burgundy)', fontStyle: 'normal' }}>
                  {"& Mrs. Patel Shakuntalaben Sunderbhai"}
                </p>
              </div>
            </div>

            <div className="couple-card">
              <div className="eyebrow">The Groom</div>
              <div className="person">
                <h3>Patel Abhi<br />Jayeshbhai</h3>
                <p>{"Son of"}</p>
                <p style={{ fontWeight: '600', color: 'var(--burgundy)', marginTop: '0.4rem', fontStyle: 'normal' }}>
                  {"Mr. Patel Jayeshbhai Parsottambhai"}
                </p>
                <p style={{ fontWeight: '600', color: 'var(--burgundy)', fontStyle: 'normal' }}>
                  {"& Mrs. Patel Sonalben Jayeshbhai"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="event" className="bg-section">
        <div className="overlay"></div>
        <div className="content">
          <h2 className="section-title reveal">The Celebration</h2>
          <p className="section-sub reveal">Join us as we take our first step together</p>
          <div className="event-grid stagger-group" style={{ maxWidth: '540px', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
            <div className="event-card" style={{ width: '100%' }}>
              <div className="eyebrow">Engagement Ceremony</div>
              <h3>Monday</h3>
              <div className="ev-date">23 November 2026</div>
              <div className="ev-time">3:00 PM Onwards</div>
              <div className="ev-venue" style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--burgundy)' }}>
                Pattan, Lunawada
              </div>
              <div style={{ marginTop: '1.2rem', fontSize: '0.9rem', color: 'var(--bronze)', letterSpacing: '0.04em' }}>
                Contact: <a href="tel:9510336458" style={{ textDecoration: 'underline' }}>9510336458</a> &nbsp;|&nbsp; <a href="tel:7069025515" style={{ textDecoration: 'underline' }}>7069025515</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="countdown" className="bg-section">
        <div className="overlay"></div>
        <div className="content">
          <h2 className="section-title reveal">The Special Day Approaches</h2>
          <div className="gold-divider reveal"></div>
          <div className="countdown-grid reveal">
            <div className="count-card"><div className="num" id="cd-days">00</div><div className="lbl">Days</div></div>
            <div className="count-card"><div className="num" id="cd-hours">00</div><div className="lbl">Hours</div></div>
            <div className="count-card"><div className="num" id="cd-mins">00</div><div className="lbl">Minutes</div></div>
            <div className="count-card"><div className="num" id="cd-secs">00</div><div className="lbl">Seconds</div></div>
          </div>
        </div>
      </section>

      <section id="location" className="bg-section">
        <div className="overlay"></div>
        <div className="content">
          <h2 className="section-title reveal">Find Your Way To Us</h2>
          <p className="section-sub reveal">{"We can't wait to celebrate with you"}</p>
          <div className="venue-grid stagger-group" style={{ maxWidth: '620px', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
            <div className="venue-card" style={{ width: '100%' }}>
              <div className="eyebrow">Engagement Ceremony · Monday, 23 November 2026</div>
              <h3 className="venue-name" style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem' }}>Pattan</h3>
              <p className="venue-place">Lunawada, Gujarat</p>
              <div className="venue-map">
                <iframe
                  title="Venue Location Map"
                  src="https://maps.google.com/maps?q=Pattan%2C%20Lunawada&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <a
                className="map-btn"
                href="https://www.google.com/maps/search/?api=1&query=Pattan+Lunawada"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="thankyou" className="bg-section">
        <div className="overlay"></div>
        <div className="content thankyou-inner">
          <div className="eyebrow reveal" style={{ marginBottom: '1rem', letterSpacing: '.25em', color: 'var(--gold)' }}>
            With Best Compliments
          </div>
          <h2 className="reveal">Thank You</h2>
          <p className="reveal">
            Your blessings and presence mean the world to us as we begin this joyous chapter together.
          </p>
          <div className="gold-divider reveal"></div>
          <p className="reveal" style={{ marginTop: '1.4rem', fontSize: '1rem', color: 'var(--burgundy)', fontWeight: '500' }}>
            Patel &amp; Sunderbhai Family &bull; Patel &amp; Jayeshbhai Family
          </p>
          <p className="reveal" style={{ marginTop: '0.8rem', fontSize: '0.88rem', color: 'var(--bronze)' }}>
            Contact: 9510336458 / 7069025515
          </p>
        </div>
      </section>

      <div className="floating-controls">
        <button className="fab" id="music-fab" title="Play/Pause music">♪</button>
      </div>

      <audio id="bg-music" src="assets/song.mp3" loop preload="auto"></audio>
    </>
  )
}
