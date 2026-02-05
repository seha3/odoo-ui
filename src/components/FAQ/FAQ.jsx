import "./FAQ.scss";

export default function FAQ() {
  const left = [
    { q: "Which license do I need?", a: "Choose a license based on your product scope, team size, and deployment needs." },
    { q: "How do I get access to my database?", a: "After purchase you’ll receive credentials and onboarding steps to connect securely." },
    { q: "How do I see previous orders?", a: "You can view all previous orders from your account dashboard under Billing." },
  ];

  const right = [
    { q: "Which license do I need?", a: "Choose a license based on your product scope, team size, and deployment needs." },
    { q: "How do I get access to my database?", a: "After purchase you’ll receive credentials and onboarding steps to connect securely." },
    { q: "How do I see previous orders?", a: "You can view all previous orders from your account dashboard under Billing." },
  ];

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="text-center faq__head">
          <h2 className="faq__title">Helpful answers</h2>
          <p className="faq__subtitle">
            Start building fast, beautiful and modern looking websites in no time.
          </p>
        </div>

        <div className="row g-3 g-md-4 justify-content-center">
          {/* Columna izquierda */}
          <div className="col-12 col-lg-6">
            <div className="accordion faq-accordion" id="faqLeft">
              {left.map((item, idx) => {
                const collapseId = `faqLeftCollapse${idx}`;
                const headingId = `faqLeftHeading${idx}`;
                return (
                  <div className="accordion-item faq-item" key={headingId}>
                    <h2 className="accordion-header" id={headingId}>
                      <button
                        className="accordion-button collapsed faq-btn"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${collapseId}`}
                        aria-expanded="false"
                        aria-controls={collapseId}
                      >
                        <span className="faq-icon" aria-hidden="true">📄</span>
                        <span className="faq-question">{item.q}</span>
                      </button>
                    </h2>

                    <div
                      id={collapseId}
                      className="accordion-collapse collapse"
                      aria-labelledby={headingId}
                      data-bs-parent="#faqLeft"
                    >
                      <div className="accordion-body faq-body">{item.a}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Columna derecha */}
          <div className="col-12 col-lg-6">
            <div className="accordion faq-accordion" id="faqRight">
              {right.map((item, idx) => {
                const collapseId = `faqRightCollapse${idx}`;
                const headingId = `faqRightHeading${idx}`;
                return (
                  <div className="accordion-item faq-item" key={headingId}>
                    <h2 className="accordion-header" id={headingId}>
                      <button
                        className="accordion-button collapsed faq-btn"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${collapseId}`}
                        aria-expanded="false"
                        aria-controls={collapseId}
                      >
                        <span className="faq-icon" aria-hidden="true">📄</span>
                        <span className="faq-question">{item.q}</span>
                      </button>
                    </h2>

                    <div
                      id={collapseId}
                      className="accordion-collapse collapse"
                      aria-labelledby={headingId}
                      data-bs-parent="#faqRight"
                    >
                      <div className="accordion-body faq-body">{item.a}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA inferior */}
        <div className="faq-cta text-center">
          <div className="faq-cta__title">I want to start a new project.</div>
          <div className="d-flex justify-content-center gap-3 mt-2">
            <a className="btn btn-primary btn-sm px-4" href="#buy">
              Buy now →
            </a>
            <a className="btn btn-link btn-sm faq-cta__link" href="#learn">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
