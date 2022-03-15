import React from 'react'
import Feature1 from 'assets/images/feature-icon-01.svg'
import Feature2 from 'assets/images/feature-icon-02.svg'
import Feature3 from 'assets/images/feature-icon-03.svg'
import Feature4 from 'assets/images/feature-icon-04.svg'
import Feature5 from 'assets/images/feature-icon-05.svg'
import Feature6 from 'assets/images/feature-icon-06.svg'
import Section from 'elements/Section'

export default function Features() {
  return (
    <Section isFeatures>
        <div className="container">
            <div className="features-inner section-inner has-bottom-divider">
                <div className="features-wrap">
                    <div className="feature text-center is-revealing">
                        <div className="feature-inner">
                            <div className="feature-icon">
                                <img src={Feature1} alt="Feature 01" />
                            </div>
                            <h4 className="feature-title mt-24">Be Productive</h4>
                            <p className="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis. Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                        </div>
                    </div>
                    <div className="feature text-center is-revealing">
                        <div className="feature-inner">
                            <div className="feature-icon">
                                <img src={Feature2} alt="Feature 02" />
                            </div>
                            <h4 className="feature-title mt-24">Be Productive</h4>
                            <p className="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis. Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                        </div>
                    </div>
                    <div className="feature text-center is-revealing">
                        <div className="feature-inner">
                            <div className="feature-icon">
                                <img src={Feature3} alt="Feature 03" />
                            </div>
                            <h4 className="feature-title mt-24">Be Productive</h4>
                            <p className="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis. Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                        </div>
                    </div>
                    <div className="feature text-center is-revealing">
                        <div className="feature-inner">
                            <div className="feature-icon">
                                <img src={Feature4} alt="Feature 04" />
                            </div>
                            <h4 className="feature-title mt-24">Be Productive</h4>
                            <p className="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis. Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                        </div>
                    </div>
                    <div className="feature text-center is-revealing">
                        <div className="feature-inner">
                            <div className="feature-icon">
                                <img src={Feature5} alt="Feature 05" />
                            </div>
                            <h4 className="feature-title mt-24">Be Productive</h4>
                            <p className="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis. Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                        </div>
                    </div>
                    <div className="feature text-center is-revealing">
                        <div className="feature-inner">
                            <div className="feature-icon">
                                <img src={Feature6} alt="Feature 06" />
                            </div>
                            <h4 className="feature-title mt-24">Be Productive</h4>
                            <p className="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis. Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Section>
  )
}
