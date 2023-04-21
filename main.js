const unreadDivs = document.querySelectorAll(".unread");
const numberUnreadSpan = document.querySelector(".number-unread");
const markReadButton = document.querySelector(".btn-mark-read");

const setNumberUnread = (n) => {
	numberUnreadSpan.textContent = n;
};

setNumberUnread(unreadDivs.length);

markReadButton.addEventListener("click", () => {
	unreadDivs.forEach((unreadDiv) => {
		unreadDiv.classList.remove("unread");
	});
	setNumberUnread(0);
	markReadButton.disabled = true;
});
