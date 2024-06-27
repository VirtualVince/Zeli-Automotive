import React from "react";

const testimonials = [
  // Assuming testimonials array is filled with objects containing name and testimonial properties
];

const EnhancedTestimonials = () => {
  return (
    <div
      className="elementor-element elementor-element-18472a6d e-con-full e-flex  e-con e-child lazyloaded animated fadeIn"
      data-id="18472a6d"
      data-element_type="container"
      data-settings='{"content_width":"full","background_background":"classic","animation_delay":150}'
      nitro-elementor-animation="animated fadeIn"
    >
      {testimonials.map((testimonial, index) => (
        <React.Fragment key={index}>
          <div
            className="elementor-element elementor-element-66950d97 elementor-view-default elementor-widget elementor-widget-icon"
            data-id="66950d97"
            data-element_type="widget"
            data-widget_type="icon.default"
          >
            <div className="elementor-widget-container">
              <div className="elementor-icon-wrapper">
                <div className="elementor-icon">
                  <i aria-hidden="true" className="icon icon-quote2"></i>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-7c0e4bd3 elementor-widget__width-initial elementor-widget elementor-widget-testimonial"
            data-id="7c0e4bd3"
            data-element_type="widget"
            data-widget_type="testimonial.default"
          >
            <div className="elementor-widget-container">
              <div className="elementor-testimonial-wrapper">
                <div className="elementor-testimonial-content">
                  {testimonial.testimonial}
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-3738233f elementor-widget elementor-widget-jkit_heading"
            data-id="3738233f"
            data-element_type="widget"
            data-widget_type="jkit_heading.default"
          >
            <div className="elementor-widget-container">
              <div className="jeg-elementor-kit jkit-heading  align-left align-tablet- align-mobile-">
                <div className="heading-section-title  display-inline-block">
                  <h4 className="heading-title">{testimonial.name}</h4>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default EnhancedTestimonials;
