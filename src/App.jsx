export default function App() {
  const videos = [
    "5 Minute Everyday Makeup",
    "Date Night Outfit Idea",
    "Summer Accessories",
    "Quick Glowy Makeup"
  ];

  const brands = [
    "ANA LUX",
    "MICAS",
    "PRADA",
    "CIDER"
  ];

  return (
    <div style={styles.body}>
      
      {/* HEADER */}
      <header style={styles.header}>
        <div style={styles.logoWrap}>
          <h1 style={styles.logo}>HOLLY LEPAGE</h1>
          <p style={styles.subtitle}>CONTENT CREATOR</p>
        </div>

        <nav style={styles.nav}>
          <a href="#" style={styles.link}>About</a>
          <a href="#" style={styles.link}>Portfolio</a>
          <a href="#" style={styles.link}>Analytics</a>
          <a href="#" style={styles.link}>Rates</a>
        </nav>
      </header>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroLeft}>
          <p style={styles.smallText}>
            BEAUTY • CONFIDENCE • INDIVIDUALITY
          </p>

          <h2 style={styles.heroTitle}>
            HOLLY <br /> LEPAGE
          </h2>

          <p style={styles.description}>
            Miami-based beauty, fashion, and lifestyle content creator helping
            brands connect authentically through elegant and engaging visual storytelling.
          </p>

          <button style={styles.button}>
            LET'S WORK TOGETHER
          </button>

          <div style={styles.stats}>
            <div style={styles.statBox}>
              <h3>44K</h3>
              <p>Instagram Followers</p>
            </div>

            <div style={styles.statBox}>
              <h3>53.4K</h3>
              <p>TikTok Followers</p>
            </div>
          </div>
        </div>

        <div style={styles.heroRight}>
          <div style={styles.imagePlaceholder}>
            MAIN IMAGE
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>ABOUT</h2>

        <div style={styles.aboutGrid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Who Am I?</h3>

            <p>
              I create beauty, skincare, fashion, and lifestyle content that empowers women and inspires confidence.
            </p>
          </div>

          <div style={styles.imageCard}>
            IMAGE
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>About My Content</h3>

            <p>
              GRWM videos, product reviews, tutorials, fashion inspiration, and authentic lifestyle moments.
            </p>
          </div>
        </div>
      </section>

      {/* VIDEOS */}
      <section style={styles.graySection}>
        <h2 style={styles.sectionTitle}>VIDEO EXAMPLES</h2>

        <div style={styles.videoGrid}>
          {videos.map((video, index) => (
            <div key={index} style={styles.phone}>
              <div style={styles.phoneInner}>
                VIDEO
              </div>

              <p style={styles.phoneText}>
                {video}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ANALYTICS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>ANALYTICS</h2>

        <div style={styles.analyticsGrid}>

          <div style={styles.analyticsCard}>
            <h3>Instagram Overview</h3>

            <div style={styles.metric}>
              <p>Views - 1.4M</p>
              <div style={styles.bar}>
                <div style={{ ...styles.fill, width: "85%" }} />
              </div>
            </div>

            <div style={styles.metric}>
              <p>Engagement - 93K</p>
              <div style={styles.bar}>
                <div style={{ ...styles.fill, width: "70%" }} />
              </div>
            </div>
          </div>

          <div style={styles.analyticsCard}>
            <h3>TikTok Metrics</h3>

            <div style={styles.metric}>
              <p>Views - 7.1M</p>
              <div style={styles.bar}>
                <div style={{ ...styles.fill, width: "90%" }} />
              </div>
            </div>

            <div style={styles.metric}>
              <p>Likes - 803K</p>
              <div style={styles.bar}>
                <div style={{ ...styles.fill, width: "75%" }} />
              </div>
            </div>
          </div>

          <div style={styles.analyticsCard}>
            <h3>Audience</h3>

            <div style={styles.metric}>
              <p>Female Audience - 87%</p>
              <div style={styles.bar}>
                <div style={{ ...styles.fill, width: "87%" }} />
              </div>
            </div>

            <div style={styles.metric}>
              <p>18-24 Age - 59%</p>
              <div style={styles.bar}>
                <div style={{ ...styles.fill, width: "59%" }} />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* BRANDS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>TRUSTED BY</h2>

        <div style={styles.brandGrid}>
          {brands.map((brand, index) => (
            <div key={index} style={styles.brand}>
              {brand}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <h2 style={styles.footerTitle}>
            LET'S CREATE BEAUTIFUL CONTENT TOGETHER
          </h2>

          <p>HollyLePage21@gmail.com</p>
          <p>@holly_lepage</p>
          <p>Miami, Florida</p>
        </div>

        <div style={styles.footerImage}>
          IMAGE
        </div>
      </footer>

    </div>
  );
}

const styles = {
  body: {
    background: "#F5F1EC",
    color: "#5E4A3A",
    fontFamily: "Arial",
    minHeight: "100vh"
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "30px 60px",
    borderBottom: "1px solid #D7C8B5"
  },

  logoWrap: {},

  logo: {
    fontSize: "42px",
    letterSpacing: "6px",
    margin: 0
  },

  subtitle: {
    letterSpacing: "4px",
    fontSize: "12px"
  },

  nav: {
    display: "flex",
    gap: "30px"
  },

  link: {
    textDecoration: "none",
    color: "#5E4A3A",
    textTransform: "uppercase",
    fontSize: "13px"
  },

  hero: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "60px",
    padding: "100px 60px",
    alignItems: "center"
  },

  heroLeft: {},

  smallText: {
    color: "#B89A77",
    letterSpacing: "4px",
    fontSize: "12px"
  },

  heroTitle: {
    fontSize: "100px",
    lineHeight: "0.9",
    margin: "20px 0"
  },

  description: {
    maxWidth: "500px",
    lineHeight: "1.8"
  },

  button: {
    marginTop: "30px",
    background: "#B89A77",
    color: "white",
    border: "none",
    padding: "18px 40px",
    borderRadius: "50px",
    cursor: "pointer"
  },

  stats: {
    display: "flex",
    gap: "20px",
    marginTop: "40px"
  },

  statBox: {
    background: "white",
    padding: "25px",
    borderRadius: "30px",
    flex: 1
  },

  heroRight: {},

  imagePlaceholder: {
    height: "650px",
    background: "#D7C8B5",
    borderRadius: "300px 300px 40px 40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "30px"
  },

  section: {
    padding: "120px 60px"
  },

  graySection: {
    background: "#EFE7DD",
    padding: "120px 60px"
  },

  sectionTitle: {
    textAlign: "center",
    fontSize: "60px",
    marginBottom: "70px"
  },

  aboutGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "30px"
  },

  card: {
    background: "white",
    padding: "40px",
    borderRadius: "40px"
  },

  cardTitle: {
    marginBottom: "20px",
    fontSize: "40px"
  },

  imageCard: {
    background: "#D7C8B5",
    borderRadius: "40px",
    minHeight: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "30px"
  },

  videoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "30px"
  },

  phone: {
    background: "black",
    padding: "10px",
    borderRadius: "40px"
  },

  phoneInner: {
    background: "#D7C8B5",
    borderRadius: "30px",
    height: "500px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  phoneText: {
    color: "white",
    textAlign: "center",
    marginTop: "20px"
  },

  analyticsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "30px"
  },

  analyticsCard: {
    background: "white",
    padding: "40px",
    borderRadius: "35px"
  },

  metric: {
    marginTop: "25px"
  },

  bar: {
    background: "#EFE7DD",
    height: "10px",
    borderRadius: "50px",
    overflow: "hidden",
    marginTop: "10px"
  },

  fill: {
    background: "#B89A77",
    height: "100%"
  },

  brandGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap"
  },

  brand: {
    width: "170px",
    height: "170px",
    borderRadius: "50%",
    background: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px"
  },

  footer: {
    background: "#B89A77",
    color: "white",
    padding: "120px 60px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "60px",
    alignItems: "center"
  },

  footerTitle: {
    fontSize: "60px",
    marginBottom: "30px"
  },

  footerImage: {
    background: "#D7C8B5",
    borderRadius: "250px 250px 40px 40px",
    minHeight: "500px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "30px",
    color: "#5E4A3A"
  }
};