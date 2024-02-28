const docBody = document.getElementById("docBody");
const allContainer = document.getElementById("allContainer");
const addWrapper = document.getElementById("addWrapper");
const dropContainer = document.getElementById("dropContainer");
const dropColParent = document.getElementById("dropColParent");
const newDropContain = document.getElementById("newDropContain");
const ramsesmiron = document.getElementById("ramsesmiron");
const maxblaWrapper = document.getElementById("maxblaWrapper");
const dropComCont = document.getElementById("dropComCont");
const addTextarea = document.getElementById("addTextarea");
const plusIcons = document.querySelectorAll(".plus-icon");
const minusIcon = document.querySelectorAll(".minus-icon");
const voteNumber = document.querySelectorAll(".vote-number");
const mainReps = document.querySelectorAll(".main-reps");
const  mainComs = document.querySelectorAll(".main-coms");
let replyCount = 0;

const voteValues = [2, 2, 2, 2];
minusIcon.forEach((icon, idx) => {
    icon.addEventListener("click", () => {
        if(voteValues[idx] > 1) {
            voteValues[idx]--;
            let currentNum = Number(voteNumber[idx].textContent);
            currentNum--;
            console.log(idx);
            voteNumber[idx].textContent = currentNum;
        }
    });
});
plusIcons.forEach((icon, idx) => {
    icon.addEventListener("click", () => {
        if(voteValues[idx] < 3) {
            voteValues[idx]++;
            let currentNum = Number(voteNumber[idx].textContent);
            currentNum++;
            voteNumber[idx].textContent = currentNum;
        }
    });
});
function sendNewComment(){
    initializeYouReply("", addTextarea.value, "1 second ago", "0", allContainer, insertBef, 1, 0);
    addTextarea.value = "";
}
initializeYouReply(`@maxblagun`, "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
"1 week ago", "2", dropComCont, appChild, 3, 1);
function initializeYouReply(tagName, content, dateText, newNum, appender, callBack, plusIf, minusIf){
    let comWrapper = document.createElement("div");
    comWrapper.classList.add("com-wrapper");
    let voteWrapper = document.createElement("div");
    voteWrapper.classList.add("vote-wrapper");
    let plusIcon = document.createElement("div");
    plusIcon.classList.add("plus-icon");
    plusIcon.textContent = "+";
    let minusIcon = document.createElement("div");
    minusIcon.classList.add("minus-icon");
    minusIcon.textContent = "-";
    let voteNum = document.createElement("div");
    voteNum.classList.add("vote-number");
    voteNum.textContent = newNum;
    let comCol = document.createElement("div");
    comCol.classList.add("com-column");
    let topFlx = document.createElement("div");
    topFlx.classList.add("top-flx");
    let topAvatar = document.createElement("img");
    topAvatar.classList.add("top-avatar");
    topAvatar.src = "image-juliusomo.png";
    let topUsername = document.createElement("div");
    topUsername.classList.add("top-username", "pix18", "bold");
    topUsername.textContent = "juliusomo";
    let topDate = document.createElement("div");
    topDate.classList.add("top-date", "pix18");
    topDate.textContent = dateText;
    topDate.style.marginRight = "auto";
    let editCont = document.createElement("div");
    editCont.classList.add("edit-text", "bold");
    let deleteContainer = document.createElement("div");
    deleteContainer.classList.add("edit-conts");
    deleteContainer.style.marginRight = "18px";
    deleteContainer.innerHTML = `<img src="icon-delete.svg" class="edit-icons" /><span class="del-txt pix18">Delete</span>`;
    let pencilContainer = document.createElement("div");
    pencilContainer.classList.add("edit-conts");
    pencilContainer.innerHTML = `<img src="icon-edit.svg" class="edit-icons" /><span class="pencil-txt pix18">Edit</span>`;
    let paraBorder = document.createElement("div");
    paraBorder.classList.add("com-para-border");
    let paraTxt = document.createElement("div");
    paraTxt.classList.add("com-para-txt");
    paraTxt.innerHTML = `<span class="tag-txt">${tagName}</span> ${content}`; 

    callBack(appender, comWrapper);
    comWrapper.appendChild(voteWrapper);
    voteWrapper.appendChild(plusIcon);
    voteWrapper.appendChild(voteNum);
    voteWrapper.appendChild(minusIcon);
    comWrapper.appendChild(comCol);
    comCol.appendChild(topFlx);
    topFlx.appendChild(topAvatar);
    topFlx.appendChild(topUsername);
    topFlx.appendChild(topDate);
    topFlx.appendChild(editCont);
    editCont.appendChild(deleteContainer);
    editCont.appendChild(pencilContainer);
    comCol.appendChild(paraBorder);
    paraBorder.appendChild(paraTxt);

    plusIcon.addEventListener("click", () => {
        if(Number(voteNum.textContent) < plusIf){
            voteNum.textContent = Number(voteNum.textContent) + 1;
        }
    });
    minusIcon.addEventListener("click", () => {
        if(Number(voteNum.textContent) > minusIf){
            voteNum.textContent = Number(voteNum.textContent) - 1;
        }
    });
    deleteContainer.addEventListener("click", () => {
        if(appender == ramsesmiron){
            deleteComment(dropComCont, comWrapper, "nothing");
        } else if(appender == dropColParent){
            deleteComment(appender, comWrapper, "yes");
            console.log("tgna");
        } else {
            deleteComment(appender, comWrapper, "nothing");
        }
    });
    pencilContainer.addEventListener("click", () => { 

        comWrapper.classList.remove("com-wrapper");     // to edit mode //
        comWrapper.classList.add("update-wrapper");
        let updTextarea = document.createElement("textarea");
        updTextarea.classList.add("upd-textarea");
        let paraContent = paraTxt.textContent;
        updTextarea.value = paraContent.slice(paraContent.indexOf(" ") + 1);
        let updBtnFlx = document.createElement("div");
        updBtnFlx.classList.add("upd-flx");
        let updBtn = document.createElement("button");
        updBtn.classList.add("update-btn", "pix18", "bold");
        updBtn.textContent = "UPDATE";

        paraBorder.removeChild(paraTxt);
        comCol.appendChild(updTextarea);
        comCol.appendChild(updBtnFlx);
        updBtnFlx.appendChild(updBtn);

        updBtn.addEventListener("click", () => { // back to normal //
            comWrapper.classList.add("com-wrapper");
            comWrapper.classList.remove("update-wrapper");
            paraBorder.appendChild(paraTxt);
            paraTxt.innerHTML = `<span class="tag-txt">${tagName}</span> ${updTextarea.value}`;
            comCol.removeChild(updTextarea);
            comCol.removeChild(updBtnFlx);
        });
    });
}
mainReps.forEach((reply, idx) => { // amyrobson reply button //

    reply.addEventListener("click", () => {
        let repWrapper = document.createElement("div");
        repWrapper.classList.add("add-wrapper");
        repWrapper.style.position = "relative";
        repWrapper.style.bottom = "10px";
        let repAvatar = document.createElement("img");
        repAvatar.classList.add("add-avatar");
        repAvatar.src = "image-juliusomo.png";
        let repTarea = document.createElement("textarea");
        repTarea.classList.add("add-textarea");
        repTarea.setAttribute("placeholder", "Add a comment...");
        let repBtn = document.createElement("button");
        repBtn.classList.add("send-btn", "pix18", "bold");
        repBtn.textContent = "REPLY";
        let userTags = document.querySelectorAll(".top-username");

        repBtn.addEventListener("click", () => {
            allContainer.removeChild(repWrapper);
            newDropContain.style.display = "flex";

            initializeYouReply(userTags[idx].textContent, repTarea.value, "1 second ago", "0", dropColParent, appChild, 1, 0);
            replyCount++;
        });

        mainComs[idx].insertAdjacentElement("afterend", repWrapper);
        repWrapper.appendChild(repAvatar);
        repWrapper.appendChild(repTarea);
        repWrapper.appendChild(repBtn);
    });
});

function maxReply(){

    let repWrapper = document.createElement("div");
    repWrapper.classList.add("add-wrapper");
    repWrapper.style.position = "relative";
    repWrapper.style.bottom = "10px";
    let repAvatar = document.createElement("img");
    repAvatar.classList.add("add-avatar");
    repAvatar.src = "image-juliusomo.png";
    let repTarea = document.createElement("textarea");
    repTarea.classList.add("add-textarea");
    repTarea.setAttribute("placeholder", "Add a comment...");
    let repBtn = document.createElement("button");
    repBtn.classList.add("send-btn", "pix18", "bold");
    repBtn.textContent = "REPLY";

    repBtn.addEventListener("click", () => {
        allContainer.removeChild(repWrapper);
        initializeYouReply("@maxblagun", repTarea.value, "1 second ago", "0", dropComCont, appChild, 1, 0);
    });

    insAdjacent(maxblaWrapper, repWrapper);
    repWrapper.appendChild(repAvatar);
    repWrapper.appendChild(repTarea);
    repWrapper.appendChild(repBtn);
}
function ramReply(){

    let repWrapper = document.createElement("div");
    repWrapper.classList.add("add-wrapper");
    repWrapper.style.position = "relative";
    repWrapper.style.bottom = "10px";
    let repAvatar = document.createElement("img");
    repAvatar.classList.add("add-avatar");
    repAvatar.src = "image-juliusomo.png";
    let repTarea = document.createElement("textarea");
    repTarea.classList.add("add-textarea");
    repTarea.setAttribute("placeholder", "Add a comment...");
    let repBtn = document.createElement("button");
    repBtn.classList.add("send-btn", "pix18", "bold");
    repBtn.textContent = "REPLY";

    repBtn.addEventListener("click", () => {
        dropComCont.removeChild(repWrapper);
        initializeYouReply("@ramsesmiron", repTarea.value, "1 second ago", "0", ramsesmiron, insAdjacent, 1, 0);
    });

    insAdjacent(ramsesmiron, repWrapper);
    repWrapper.appendChild(repAvatar);
    repWrapper.appendChild(repTarea);
    repWrapper.appendChild(repBtn);
}


function createEditWrapper(content, preWrapper, tgName, newNum) {
    let updWrapper = document.createElement("div");
    updWrapper.classList.add("update-wrapper");
    let updVoteWrp = document.createElement("div");
    updVoteWrp.classList.add("vote-wrapper");
    let updPlus = document.createElement("div");
    updPlus.classList.add("plus-icon");
    updPlus.textContent = "+";
    let updMinus = document.createElement("div");
    updMinus.classList.add("minus-icon");
    updMinus.textContent = "-";
    let updVoteNum = document.createElement("div");
    updVoteNum.classList.add("vote-number");
    updVoteNum.textContent = newNum;
    let updComCol = document.createElement("div");
    updComCol.classList.add("com-column");
    let updFlx = document.createElement("div");
    updFlx.classList.add("top-flx");
    let updAvatar = document.createElement("img");
    updAvatar.classList.add("top-avatar");
    updAvatar.src = "image-juliusomo.png";
    let updUser = document.createElement("div");
    updUser.classList.add("top-username", "pix18", "bold");
    updUser.textContent = "juliusomo";
    let updDate = document.createElement("div");
    updDate.classList.add("top-date", "pix18");
    updDate.textContent = "1 week ago";
    updDate.style.marginRight = "auto";
    let updEditCont = document.createElement("div");
    updEditCont.classList.add("edit-text", "bold");
    let updDelCon = document.createElement("div");
    updDelCon.classList.add("edit-conts");
    updDelCon.style.marginRight = "18px";
    updDelCon.innerHTML = `<img src="icon-delete.svg" class="edit-icons" /><span class="del-txt pix18">Delete</span>`;
    let updPenCon = document.createElement("div");
    updPenCon.classList.add("edit-conts");
    updPenCon.innerHTML = `<img src="icon-edit.svg" class="edit-icons" /><span class="pencil-txt pix18">Edit</span>`;
    let updTextarea = document.createElement("textarea");
    updTextarea.classList.add("upd-textarea");
    let paraContent = content.textContent;
    updTextarea.value = paraContent.slice(paraContent.indexOf(" ") + 1);
    let updBtnFlx = document.createElement("div");
    updBtnFlx.classList.add("upd-flx");
    let updBtn = document.createElement("button");
    updBtn.classList.add("update-btn", "pix18", "bold");
    updBtn.textContent = "UPDATE";

    updPlus.addEventListener("click", () => {
        if(Number(updVoteNum.textContent) < 3){
            updVoteNum.textContent = Number(updVoteNum.textContent) + 1;
        }
    });
    updMinus.addEventListener("click", () => {
        if(Number(updVoteNum.textContent) > 1){
            updVoteNum.textContent = Number(updVoteNum.textContent) - 1;
        }
    });
    updDelCon.addEventListener("click", () => {
        deleteComment(dropComCont, updWrapper);
    });
    updBtn.addEventListener("click", () => {
        dropComCont.removeChild(updWrapper);
        initializeYouReply(tgName, updTextarea.value, updVoteNum.textContent);
    });

    dropComCont.insertBefore(updWrapper, preWrapper);
    updWrapper.appendChild(updVoteWrp);
    updVoteWrp.appendChild(updPlus);
    updVoteWrp.appendChild(updVoteNum);
    updVoteWrp.appendChild(updMinus);
    updWrapper.appendChild(updComCol);
    updComCol.appendChild(updFlx);
    updFlx.appendChild(updAvatar);
    updFlx.appendChild(updUser);
    updFlx.appendChild(updDate);
    updFlx.appendChild(updEditCont);
    updEditCont.appendChild(updDelCon);
    updEditCont.appendChild(updPenCon);     
    updComCol.appendChild(updTextarea);  
    updComCol.appendChild(updBtnFlx);
    updBtnFlx.appendChild(updBtn); 

    dropComCont.removeChild(preWrapper);
}

function deleteComment(parent, comment, strCheck){
    let modalBg = document.createElement("div");
    modalBg.classList.add("modal-background");
    let modalWrp = document.createElement("div");
    modalWrp.classList.add("modal-wrapper");
    let modalTitle = document.createElement("div");
    modalTitle.classList.add("modal-title", "bold");
    modalTitle.textContent = "Delete comment";
    let modalPara = document.createElement("div");
    modalPara.classList.add("modal-para-txt");
    modalPara.textContent = "Are you sure you want to delete this comment? This will remove the comment and can't be undone.";
    let modalFlex = document.createElement("div");
    modalFlex.classList.add("modal-flx");
    let modalCancel = document.createElement("button");
    modalCancel.classList.add("modal-btns", "grey-btn", "pix18", "bold");
    modalCancel.textContent = "NO, CANCEL";
    let modalDelete = document.createElement("button");
    modalDelete.classList.add("modal-btns", "red-btn", "pix18", "bold");
    modalDelete.textContent = "Yes, Delete";

    docBody.appendChild(modalBg);
    modalBg.appendChild(modalWrp);
    modalWrp.appendChild(modalTitle);
    modalWrp.appendChild(modalPara);
    modalWrp.appendChild(modalFlex);
    modalFlex.appendChild(modalCancel);
    modalFlex.appendChild(modalDelete);

    modalCancel.addEventListener("click", () => { 
        docBody.removeChild(modalBg);     
    });
    modalDelete.addEventListener("click", () => {
        docBody.removeChild(modalBg);
        parent.removeChild(comment);
        if(strCheck === "yes"){
            replyCount--;
            console.log("repc");
        }
        if(strCheck === "yes" && replyCount === 0){
            newDropContain.style.display = "none";
            console.log("disn");
        }
    });
}
function appChild(parent, wrapper){
    parent.appendChild(wrapper);
}
function insertBef(parent, wrapper){
    parent.insertBefore(wrapper, addWrapper);
}
function insertBEFORE(parent, wrapper, before){
    parent.insertBefore(wrapper, before);
}
function insAdjacent(parent, wrapper){
    parent.insertAdjacentElement("afterend", wrapper);
}