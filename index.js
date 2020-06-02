
window.onload = function () {
 function search (e, flag = false) {
  return (flag) ? document.querySelectorAll(e) : document.querySelector(e);
 }
 function creat (e) {
  return document.createElement(e);
 }
  function selector (e, select) {
  e.classList.add(select);
  return e;
 }
  function remove (e) {
  if (e == null) return null;
  e.parentNode.removeChild(e);
 }
 function append (parent, e, flag = false) {
  parent.appendChild(e);
 }

 function numb (number) {
  return (typeof Number(number) === 'number' && isNaN(Number(number)) != true) ? true : false;
 }

 doc = document.body;
 append(doc, selector(creat('input'), 'inp1'));
 append(doc, selector(creat('input'), 'inp2'));
 append(doc, selector(creat('button'), 'but'));

 search('.but').innerHTML = 'Calculate';

 search('.but').onclick = function () {
  remove(search('.result'));
  remove(search('.message-error'));
  remove(search('.message-error'));
  let inp1 = search('.inp1'), inp2 = search('.inp2');
  if (numb(inp1.value) !== true) {
   inp1.parentNode.insertBefore(selector(creat('span'), 'message-error'), inp1.nextSibling);
   search('.message-error', true)[0].innerHTML = ' Это не число ';
  }

  if (numb(inp2.value) !== true) {
   inp2.parentNode.insertBefore(selector(creat('span'), 'message-error'), inp2.nextSibling);
   search('.message-error', true)[search('.message-error', true).length - 1].innerHTML = ' Это не число ';
  }

  if (numb(Number(inp1.value)) !== false && numb(Number(inp2.value)) !== false) {
   append(doc, selector(creat('div'), 'result'));
   search('.result').innerHTML = Number(inp1.value) + Number(inp2.value);
  }
 }
}