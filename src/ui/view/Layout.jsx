import stream from "mithril/stream";

import LogoLink from "./components/Layout/Nav/UI/Buttons/LogoLink.jsx";
import Modal from "./components/Layout/Modal.jsx";
import MaskHeader from "./components/Layout/Nav/MaskHeader.jsx";
import MainStage from "./components/Layout/MainStage.jsx";
import Footer from "./components/Layout/Footer.jsx";

import DomainStore from "../store/domain-store";
import { openModal, openSpinner } from "../assets/scripts/animations.js";

export default {
  oncreate: ({ attrs: { spinnerState, formNeeded } }) => {
    openSpinner(true);
    spinnerState.map(openSpinner);
    if (formNeeded()) openModal(true);

    document.getElementById("domain-selector").selectedIndex = Math.max(
      0,
      DomainStore.list().indexOf(DomainStore.current())
    );
  },
  view: ({ attrs, children: [componentNode] }) => (
    <div id="layout" className="w-full h-full">
      <Modal spinnerNeeded={attrs.spinnerState} formNeeded={attrs.formNeeded} />
      <LogoLink />
      <div id="app" className="flex flex-col justify-between min-h-screen">
        <MaskHeader />
        <MainStage index={attrs.index}>{componentNode}</MainStage>
      </div>
      <Footer />
    </div>
  ),
};

 function getContact(id,) {
  return new Promise((resolve, reject) =>  {
    const request = new XMLHttpRequest();
    request.open('GET', `http://localhost:3000/api/contacts/${id}`);
    request.responseType = 'json';
    request.onload = () => {
      if (this.status == 200) {
        resolve(request.response)
      } else {
        reject('Error!')
      }
    };

    request.send();
  });
}

function makeRequest(method, url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText,
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText,
      });
    };
    xhr.send();
  });
}