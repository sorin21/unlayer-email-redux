import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';

class PreviewHTML extends Component  {
  previewTemplateHtml = () => {
    if (this.state.template.html !== null) {
      const html = JSON.parse(JSON.stringify(this.state.template.html));
      const x = window.open("", "", "location=yes, menubar=yes, toolbar=yes, scrollbars=yes, resizable=yes, width=600, height=750");
      x.document.open();
      x.document.write(html);
      x.document.close();
    }
  }
  render() {
    return(
      <div>
        <button onClick={this.previewTemplateHtml}>Preview</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    template: state.template
  }
}

const ConnectedPreviewHTML = connect(mapStateToProps)(PreviewHTML);


export default PreviewHTML;