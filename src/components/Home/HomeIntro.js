import React, { Component } from 'react';

class HomeIntro extends Component {
  render() {
    return (
      <div className="intro" style={{ 'backgroundImage': 'url(images/temp/intro.jpg)' }}>
        <div className="shell">
          <div className="intro__content">
            <h1>Cours Masson</h1>

            <h3>Trouvez un stage pour intégrer puis réussir dans les fillières sélectives</h3>

            <div className="intro__actions">
              <div className="select-level">
                <label htmlFor="level" className="hidden">Choisissez votre niveau</label>
                <select name="level" id="level" defaultValue="1">
                  <option className="option" value="1" disabled>Choisissez votre niveau</option>

                  <option className="option" value="0">Niveau</option>

                  <option className="option" value="2">Choisissez votre niveau</option>

                  <option className="option" value="3">Choisissez votre niveau</option>
                </select>
              </div>

              <div className="select-course">
                <label htmlFor="level" className="hidden">Choisissez votre matière</label>
                <select name="level" id="field-1#" defaultValue="1">
                  <option value="1" disabled>Choisissez votre matière</option>

                  <option value="0">Matière</option>

                  <option value="2">Choisissez votre matière</option>

                  <option value="3">Choisissez votre matière</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeIntro;
