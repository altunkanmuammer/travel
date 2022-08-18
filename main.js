/* inspiration 
https://dribbble.com/shots/7734753-Endangered-Animals/attachments/438186?mode=media
*/

const divs = document.querySelectorAll(".gallery div");

divs.forEach((item) => {
  item.addEventListener("mouseover", () => {
    divs.forEach((el) => el.classList.remove("active"));

    item.classList.add("active");
  });
});
