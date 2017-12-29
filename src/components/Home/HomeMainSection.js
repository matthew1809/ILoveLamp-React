import React, { Component } from 'react';
import TopPicksContainer from './TopPicksContainer';
import CategoriesContainer from '../Categories/CategoriesContainer';
import MailingList from '../global/MailingList';

class HomeMainSection extends Component {
  render() {
    return (
      <div className="main">
        <div className="section-courses">
          <div className="shell">
            <div className="select-sort">
              <label htmlFor="sort">Trier par</label>

              <select name="sort" id="sort">
                <option value="1">Tarif</option>
                <option value="2">Tarif</option>
                <option value="3">Tarif</option>
              </select>
            </div>

            <div className="courses">
              <div className="course">
                <a href="#">
                  <div className="course__image">
                    <img src="images/temp/math.jpg" alt="" />

                    <span className="course__image-label">60 heures</span>
                  </div>

                  <div className="course__content">
                    <h4>Mathématiques</h4>

                    <h3>Nom Du Stage Sur 2 Lignes Maximum</h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>

                    <h4>Niveau</h4>

                    <div className="course__foot">
                      <div className="course__foot-inner">
                        <p className="course__date">
                          <i className="ico-calendar"></i>

                          Du 15/10:2017 au 20/10/2017
                    </p>

                        <p className="course__location">
                          <i className="ico-location"></i>

                          Paris, 75008
                    </p>
                      </div>

                      <span className="course__price">
                        1500 €
                  </span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="course">
                <a href="#">
                  <div className="course__image">
                    <img src="images/temp/math.jpg" alt="" />

                    <span className="course__image-label">60 heures</span>
                  </div>

                  <div className="course__content">
                    <h4>Mathématiques</h4>

                    <h3>Nom Du Stage Sur 2 Lignes Maximum</h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>

                    <h4>Niveau</h4>

                    <div className="course__foot">
                      <div className="course__foot-inner">
                        <p className="course__date">
                          <i className="ico-calendar"></i>

                          Du 15/10:2017 au 20/10/2017
                    </p>

                        <p className="course__location">
                          <i className="ico-location"></i>

                          Paris, 75008
                    </p>
                      </div>

                      <span className="course__price">
                        1500 €
                  </span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="course">
                <a href="#">
                  <div className="course__image">
                    <img src="images/temp/math.jpg" alt="" />

                    <span className="course__image-label">60 heures</span>
                  </div>

                  <div className="course__content">
                    <h4>Mathématiques</h4>

                    <h3>Nom Du Stage Sur 2 Lignes Maximum</h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>

                    <h4>Niveau</h4>

                    <div className="course__foot">
                      <div className="course__foot-inner">
                        <p className="course__date">
                          <i className="ico-calendar"></i>

                          Du 15/10:2017 au 20/10/2017
                    </p>

                        <p className="course__location">
                          <i className="ico-location"></i>

                          Paris, 75008
                    </p>
                      </div>

                      <span className="course__price">
                        1500 €
                  </span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="course">
                <a href="#">
                  <div className="course__image">
                    <img src="images/temp/math.jpg" alt="" />

                    <span className="course__image-label">60 heures</span>
                  </div>

                  <div className="course__content">
                    <h4>Mathématiques</h4>

                    <h3>Nom Du Stage Sur 2 Lignes Maximum</h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>

                    <h4>Niveau</h4>

                    <div className="course__foot">
                      <div className="course__foot-inner">
                        <p className="course__date">
                          <i className="ico-calendar"></i>

                          Du 15/10:2017 au 20/10/2017
                    </p>

                        <p className="course__location">
                          <i className="ico-location"></i>

                          Paris, 75008
                    </p>
                      </div>

                      <span className="course__price">
                        1500 €
                  </span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="course">
                <a href="#">
                  <div className="course__image">
                    <img src="images/temp/math.jpg" alt="" />

                    <span className="course__image-label">60 heures</span>
                  </div>

                  <div className="course__content">
                    <h4>Mathématiques</h4>

                    <h3>Nom Du Stage Sur 2 Lignes Maximum</h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>

                    <h4>Niveau</h4>

                    <div className="course__foot">
                      <div className="course__foot-inner">
                        <p className="course__date">
                          <i className="ico-calendar"></i>

                          Du 15/10:2017 au 20/10/2017
                    </p>

                        <p className="course__location">
                          <i className="ico-location"></i>

                          Paris, 75008
                    </p>
                      </div>

                      <span className="course__price">
                        1500 €
                  </span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="course">
                <a href="#">
                  <div className="course__image">
                    <img src="images/temp/math.jpg" alt="" />

                    <span className="course__image-label">60 heures</span>
                  </div>

                  <div className="course__content">
                    <h4>Mathématiques</h4>

                    <h3>Nom Du Stage Sur 2 Lignes Maximum</h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>

                    <h4>Niveau</h4>

                    <div className="course__foot">
                      <div className="course__foot-inner">
                        <p className="course__date">
                          <i className="ico-calendar"></i>

                          Du 15/10:2017 au 20/10/2017
                    </p>

                        <p className="course__location">
                          <i className="ico-location"></i>

                          Paris, 75008
                    </p>
                      </div>

                      <span className="course__price">
                        1500 €
                  </span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="course">
                <a href="#">
                  <div className="course__image">
                    <img src="images/temp/math.jpg" alt="" />

                    <span className="course__image-label">60 heures</span>
                  </div>

                  <div className="course__content">
                    <h4>Mathématiques</h4>

                    <h3>Nom Du Stage Sur 2 Lignes Maximum</h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>

                    <h4>Niveau</h4>

                    <div className="course__foot">
                      <div className="course__foot-inner">
                        <p className="course__date">
                          <i className="ico-calendar"></i>

                          Du 15/10:2017 au 20/10/2017
                    </p>

                        <p className="course__location">
                          <i className="ico-location"></i>

                          Paris, 75008
                    </p>
                      </div>

                      <span className="course__price">
                        1500 €
                  </span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="course">
                <a href="#">
                  <div className="course__image">
                    <img src="images/temp/math.jpg" alt="" />

                    <span className="course__image-label">60 heures</span>
                  </div>

                  <div className="course__content">
                    <h4>Mathématiques</h4>

                    <h3>Nom Du Stage Sur 2 Lignes Maximum</h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>

                    <h4>Niveau</h4>

                    <div className="course__foot">
                      <div className="course__foot-inner">
                        <p className="course__date">
                          <i className="ico-calendar"></i>

                          Du 15/10:2017 au 20/10/2017
                    </p>

                        <p className="course__location">
                          <i className="ico-location"></i>

                          Paris, 75008
                    </p>
                      </div>

                      <span className="course__price">
                        1500 €
                  </span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="course">
                <a href="#">
                  <div className="course__image">
                    <img src="images/temp/math.jpg" alt="" />

                    <span className="course__image-label">60 heures</span>
                  </div>

                  <div className="course__content">
                    <h4>Mathématiques</h4>

                    <h3>Nom Du Stage Sur 2 Lignes Maximum</h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>

                    <h4>Niveau</h4>

                    <div className="course__foot">
                      <div className="course__foot-inner">
                        <p className="course__date">
                          <i className="ico-calendar"></i>

                          Du 15/10:2017 au 20/10/2017
                    </p>

                        <p className="course__location">
                          <i className="ico-location"></i>

                          Paris, 75008
                    </p>
                      </div>

                      <span className="course__price">
                        1500 €
                  </span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="course">
                <a href="#">
                  <div className="course__image">
                    <img src="images/temp/math.jpg" alt="" />

                    <span className="course__image-label">60 heures</span>
                  </div>

                  <div className="course__content">
                    <h4>Mathématiques</h4>

                    <h3>Nom Du Stage Sur 2 Lignes Maximum</h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>

                    <h4>Niveau</h4>

                    <div className="course__foot">
                      <div className="course__foot-inner">
                        <p className="course__date">
                          <i className="ico-calendar"></i>

                          Du 15/10:2017 au 20/10/2017
                    </p>

                        <p className="course__location">
                          <i className="ico-location"></i>

                          Paris, 75008
                    </p>
                      </div>

                      <span className="course__price">
                        1500 €
                  </span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="course">
                <a href="#">
                  <div className="course__image">
                    <img src="images/temp/math.jpg" alt="" />

                    <span className="course__image-label">60 heures</span>
                  </div>

                  <div className="course__content">
                    <h4>Mathématiques</h4>

                    <h3>Nom Du Stage Sur 2 Lignes Maximum</h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>

                    <h4>Niveau</h4>

                    <div className="course__foot">
                      <div className="course__foot-inner">
                        <p className="course__date">
                          <i className="ico-calendar"></i>

                          Du 15/10:2017 au 20/10/2017
                    </p>

                        <p className="course__location">
                          <i className="ico-location"></i>

                          Paris, 75008
                    </p>
                      </div>

                      <span className="course__price">
                        1500 €
                  </span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="course">
                <a href="#">
                  <div className="course__image">
                    <img src="images/temp/math.jpg" alt="" />

                    <span className="course__image-label">60 heures</span>
                  </div>

                  <div className="course__content">
                    <h4>Mathématiques</h4>

                    <h3>Nom Du Stage Sur 2 Lignes Maximum</h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>

                    <h4>Niveau</h4>

                    <div className="course__foot">
                      <div className="course__foot-inner">
                        <p className="course__date">
                          <i className="ico-calendar"></i>

                          Du 15/10:2017 au 20/10/2017
                    </p>

                        <p className="course__location">
                          <i className="ico-location"></i>

                          Paris, 75008
                    </p>
                      </div>

                      <span className="course__price">
                        1500 €
                  </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="paging">
              <ul>
                <li className="current">
                  <a href="#">1</a>
                </li>

                <li>
                  <a href="#">2</a>
                </li>

                <li>
                  <a href="#">3</a>
                </li>

                <li>
                  <a href="#">4</a>
                </li>

                <li>
                  <a href="#">Suite</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="section-testimonials">
          <div className="shell-secondary">
            <h3>Ils Parlent Du Cours Masson</h3>

            <div className="tabs-testimonials">
              <div className="tabs__head">
                <div className="slider-testimonials">
                  <div className="slider__clip">
                    <div className="slider__slides">
                      <div className="slider__slide">
                        <a href="#tab1" className="slider__slide-image">
                          <img src="images/temp/circle.png" alt="" />
                        </a>
                      </div>

                      <div className="slider__slide">
                        <a href="#tab2" className="slider__slide-image">
                          <img src="images/temp/circle.png" alt="" />
                        </a>
                      </div>

                      <div className="slider__slide">
                        <a href="#tab3" className="slider__slide-image">
                          <img src="images/temp/circle.png" alt="" />
                        </a>
                      </div>

                      <div className="slider__slide">
                        <a href="#tab4" className="slider__slide-image">
                          <img src="images/temp/circle.png" alt="" />
                        </a>
                      </div>

                      <div className="slider__slide">
                        <a href="#tab5" className="slider__slide-image">
                          <img src="images/temp/circle.png" alt="" />
                        </a>
                      </div>

                      <div className="slider__slide">
                        <a href="#tab6" className="slider__slide-image">
                          <img src="images/temp/circle.png" alt="" />
                        </a>
                      </div>

                      <div className="slider__slide">
                        <a href="#tab7" className="slider__slide-image">
                          <img src="images/temp/circle.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tabs__body">
                <div className="tab current" id="tab1">
                  <h4 className="tab__title">Prénom Nom</h4>

                  <h4 className="tab__subtitle">Niveau</h4>

                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                <div className="tab" id="tab2">
                  <h4 className="tab__title">Prénom Nom</h4>

                  <h4 className="tab__subtitle">Niveau</h4>

                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                <div className="tab" id="tab3">
                  <h4 className="tab__title">Prénom Nom</h4>

                  <h4 className="tab__subtitle">Niveau</h4>

                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                <div className="tab" id="tab4">
                  <h4 className="tab__title">Prénom Nom</h4>

                  <h4 className="tab__subtitle">Niveau</h4>

                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                <div className="tab" id="tab5">
                  <h4 className="tab__title">Prénom Nom</h4>

                  <h4 className="tab__subtitle">Niveau</h4>

                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                <div className="tab" id="tab6">
                  <h4 className="tab__title">Prénom Nom</h4>

                  <h4 className="tab__subtitle">Niveau</h4>

                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                <div className="tab" id="tab7">
                  <h4 className="tab__title">Prénom Nom</h4>

                  <h4 className="tab__subtitle">Niveau</h4>

                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeMainSection;
