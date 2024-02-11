<template>
    <h2>Add Employees Information</h2>
    <form>
        <div class="sec1">
            <label for="firstname">First Name</label>
            <input type="text" name="firstname">
            <label for="email">Email Adddress</label>
            <input type="email" name="email">
            <label for="contact">Contact</label>
            <input type="text" name="contact">
            <label for="address">Address</label>
            <input type="text" name="address">
        </div>
        <div class="sec2">
            <label for="lastname">Last Name</label>
            <input type="text" name="lastname">
            <label for="lastname">Department</label>
            <input type="text" name="department">
            <label for="designation">Designation</label>
            <input type="text" name="designation">

        </div>
        <input type="submit" value="Submit">
    </form>
</template>
<style scoped>
h2{
    margin-top:3rem;
    color:rgba(1, 1, 52, 0.922);
}
form{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap:1rem;
    margin-top:2rem;
}
form label{
    font-size: 0.8rem;
}
input[type=text], [type=email] {
  width: 100%;
  padding: 15px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type=submit] {
  width: 40%;
  background-color: red;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
/* Media queries */
@media screen and (max-width:1200px) {
    form{
    grid-template-columns: 1fr;
}
}
</style>