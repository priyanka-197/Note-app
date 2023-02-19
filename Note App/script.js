
getNotes().forEach((note)=>{
   
    const noteE1 =createE1(note.id,note.content)
    app.insertBefore(noteE1,btn)
})
function createE1(id,content){
console.log(id,content);

const elemnt = document.createElement('textarea')
elemnt.setAttribute('id','textarea');
elemnt.placeholder ='Empty Note';
elemnt.value = content;
elemnt.addEventListener('dblclick',()=>{
 const warning =    confirm('do you want to delete this note?')
 if(warning){
    deleteNote(id,elemnt)
 }
})

elemnt.addEventListener('input',()=>{
    updateNote(id,elemnt.value)
})
return elemnt
}


function deleteNote(id,elemnt){
    const notes = getNotes().filter((note)=>note.id !=id)
saveNotes(notes)
app.removeChild(elemnt)
}

function updateNote(id,content){
const notes = getNotes();
const target = notes.filter((note)=>note.id ==id)[0]
target.content = content;
saveNotes(notes)
}


function run(){
    const notes =getNotes();

    const obj = {
        id:Math.floor(Math.random()*100000),
        content:""
    }

const noteE1 =createE1(obj.id,obj.content)
app.insertBefore(noteE1,btn)
notes.push(obj);
saveNotes(notes);


}
function saveNotes(notes){
localStorage.setItem('note-app',JSON.stringify(notes))
}
 function getNotes(){
   return  JSON.parse(localStorage.getItem('note-app')|| '[]')
 }
