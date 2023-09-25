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
    const subjectList = (document.getElementById("info").innerHTML = `
    <h3>${course.courseNo} ${course.abbrName}</h3>
    <h4>จำนวนหน่วยกิต</h4>`);
  } catch (err) {
    console.log(err);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  main();
});
