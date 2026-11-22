function e(o,t){const c=[t.CharacterId,t.AchievementCount,t.Value];return o.replace(/\{(\w+)\}/gu,(r,i)=>/^\d$/u.test(i)?c[Number(i)]??r:t[i]??r)}export{e as m};
