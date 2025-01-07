import React from "react";

function FaqItem({ questionId, question, answer, isOpen }) {
  return (
    <div className="accordion-item mb-3 ">
      <div className="number">{questionId}</div>
      <div className="w-100">
        <h2 className="accordion-header">
          <button
            className={`accordion-button ${!isOpen ? "collapsed" : ""}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${questionId}`}
            aria-expanded={isOpen ? "true" : "false"}
            aria-controls={`collapse${questionId}`}
          >
            <span>
              {question}
            </span>
          </button>
        </h2>
        <div
          id={`collapse${questionId}`}
          className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
          data-bs-parent="#accordion-main"
        >
          <div
            className="accordion-body"
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        </div>
      </div>
    </div>
  );
}

function FaqsSection({ faqs }) {
  return (
    <div className="container faqs py-5 appMobilePadding">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10 text-center">
          <h2 className="mb-5 mainHeadingMobile">Frequently Asked Questions</h2>
          <div className="accordion" id="accordion-main">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                questionId={faq.questionId}
                question={faq.question}
                answer={faq.answer}
                isOpen={index === 0}
              />
            ))}
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
}

export default FaqsSection;
