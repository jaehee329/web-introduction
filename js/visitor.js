function button1_click() {
    const name = document.getElementById("name").value;
    const checked = document.querySelectorAll("input[type='checkbox']:checked").length;
    console.log(name);
    console.log(checked);
    alert(name + "님, 저와 " + checked + "개의 취향이 같으시네요!");
}