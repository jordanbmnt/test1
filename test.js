(()=>{
  
  const myStats = [
  ...document.querySelector(
    "#suggested-tasks-container > div > div > div.View__StyledView-dJETNi.hFpsvT > div > div.View__StyledView-dJETNi.bCuHFN > div > div > div.StyledTableComponents__ScrollWindowPresentational-xfeMN.eiVzPx > div > table > tbody",
  ).children,
]
  .map((e) => {
    if (
      /Email/.test([...e.children][4].innerHTML || "") ||
      /Meeting/.test([...e.children][2].innerHTML || "")
    ) {
      return {
        email: /Email/.test([...e.children][4].innerHTML || ""),
        meeting: /Meeting/.test([...e.children][2].innerHTML || ""),
      };
    } else {
      return (
        /Email/.test([...e.children][4].innerHTML || "") ||
        /Meeting/.test([...e.children][2].innerHTML || "")
      );
    }
  })
  .reduce(
    (prev, curr) => {
      if (curr.meeting) {
        prev.meetings += 1;
      } else if (curr.email) {
        prev.emails += 1;
      } else {
        prev.other += 1;
      }
      return prev;
    },
    { emails: 0, other: 0, meetings: 0 },
  );

window.alert(`Emails: ${myStats.emails}\nMeetings: ${myStats.meetings}\nOther: ${myStats.other}`)
})()
