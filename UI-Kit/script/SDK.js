
const app_layout = document.querySelector("app-layout");

function alert_create(
  alert_id,
  alert_title,
  alert_content,
  index,
  alert_button,
  alert_event
) {

  let layout = '';

  if(index == 1) {
    layout = `
      <margin-button-l>
        <margin-button-r>
          <${alert_button[1]}-button onclick='${alert_event[0]}(${alert_event[1]})'>
            <button-label>${alert_button[0]}</button-label>
          </${alert_button[1]}-button>
        </margin-button-r>
      </margin-button-l>
  `
  } else if (index == 2) {
    layout = `
      <row-split>
      <margin-button-l>
        <${alert_button[0][1]}-button onclick='${alert_event[0][0]}(${alert_event[0][1]})'>
          <button-label>${alert_button[0][0]}</button-label>
        </${alert_button[0][1]}-button>
      </margin-button-l>
    </row-split>
    <row-split>
      <margin-button-r>
        <${alert_button[1][1]}-button onclick='${alert_event[1][0]}(${alert_event[1][1]})'>
          <button-label>${alert_button[1][0]}</button-label>
        </${alert_button[1][1]}-button>
      </margin-button-r>
    </row-split>
  `
  }

  app_layout.innerHTML = app_layout.innerHTML + (`
    <alert-dialog id="${alert_id}">
      <dialog-area>
        <full-control>
          <layout-split-7>
            <dialog-content>
              <dialog-title>${alert_title}</dialog-title>
              <dialog-text>${alert_content}</dialog-text>
            </dialog-content>
          </layout-split-7>
          <layout-split-3>
            ${layout}
          </layout-split-3>
        </full-control>
      </dialog-area>
    </alert-dialog>
  `);

  setTimeout(() => {
    document.querySelector("alert-dialog").classList.add("opacity-1");
    document.querySelector("dialog-area").classList.add("margin-r0");
    document.querySelector("control-area").classList.add("control-back");
  }, 5);
}

function alert_close(alert_id) {
  document.querySelector("alert-dialog").classList.remove("opacity-1");
  document.querySelector("dialog-area").classList.remove("margin-r0");
  document.querySelector("control-area").classList.remove("control-back");

  setTimeout(() => {
    document.getElementById(alert_id).remove();
  }, 250);
}