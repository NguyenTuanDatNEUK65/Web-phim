function loadPage(page, title) {
    window.location.href=page;
}
function loadHomePage() {
    window.location.href='index.html'
}
// Xử lý khi người dùng nhấn nút quay lại (back)
window.onpopstate = function(event) {
    if (event.state && event.state.page) {
        loadPage(event.state.page, document.title);
    } else {
        loadHomePage(); // Nếu không có trang trước, quay lại trang chủ
    }
};
