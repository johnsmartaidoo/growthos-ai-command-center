async function loadGrowthOS(){
 const sections=['users','workspaces','agents','logs'];
 const data={};
 for(const section of sections){
  const r=await fetch(`/api/${section}`);
  data[section]=await r.json();
 }
 document.querySelectorAll('[data-section]').forEach(el=>{
  const key=el.dataset.section;
  el.innerHTML=JSON.stringify(data[key],null,2);
 });
}
window.onload=loadGrowthOS;
