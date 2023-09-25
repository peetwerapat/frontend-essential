const main = async () => {
  try {
    const response = await fetch("https://api.minireg.thanayut.in.th/courses");
    console.log(response);

    const rawData = await response.json();

    if (!response.ok) {
      throw new Error(`code - ${response.status} - ${rawData.message}`);
    }

    console.log(rawData);
    const newData = rawData.course;
    const subjectInput = document.getElementById("subject");
    const subjectList = (document.getElementById("info").innerHTML =
      "<h1>sub</h1>");
  } catch (err) {
    console.log(err);
  }
};

// document.addEventListener("DOMContentLoaded", () => {
//   main();
// });

main();
