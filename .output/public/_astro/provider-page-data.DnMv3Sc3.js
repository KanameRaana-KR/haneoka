const e={"zh-TW":"tw","zh-CN":"cn",ko:"kr",en:"en"},r=o=>e[o]||"jp",s=(o,a)=>`/api/v1/${o==="sekai"?"sekai":"garupa/bestdori"}/${r(a)}`;export{s as a,r as p};
