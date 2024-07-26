const inputBox = document.getElementById("input-box") // Lấy ô input
const listContainer = document.getElementById("list-container")
const addButton = document.querySelector("button") // Lấy nút add

// Xử lý sự kiện khi nhấn nút Add

function addTask() {
    // Nếu không nhập gì thì thông báo lỗi!
    if (inputBox.value === '') {
        alert("Bạn chưa nhập gì cả T_T !!");
    }
    else {
        // Cơ bản về createElement gồm 3 dòng: Create -> inner -> appendChild
        // Tạo dòng note (chứa có dấu x)
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // Hiện dấu x - sự kiện để xoá dòng note
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Dấu nhân (x)
        li.appendChild(span);
    }
    // Ấn xong Add thì xoá nội dung ở input-box
    inputBox.value = "";
    saveData();
}

// Thêm sự kiện nhấn Enter thì cũng tương đương với click nút Add

inputBox.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

// Xử lý sự kiện checked (đã làm xong) và xoá note 

listContainer.addEventListener("click", function(e) {
    
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Hàm lưu trữ dữ liệu

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Hiển thị dữ liệu đã lưu trữ

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

