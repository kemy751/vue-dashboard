<template>
    <section>
        <h2>Employees Table</h2>
        <div>
            <table>
                <tr>
                    <th>Employee Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Designation</th>
                    <th>Department</th>
                    <th>Email Address</th>
                    <th>Contact</th>
                    <th>Address</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>U01</td>
                    <td>John</td>
                    <td>Doe</td>
                    <td>Human Resource Manager</td>
                    <td>Human Resource</td>
                    <td>johndoe77@gmail.com</td>
                    <td>0755636943</td>
                    <td>Kawuuku</td>
                    <td class="suspend"><span>Inactive</span></td>
                    <td class="action">
                        <i class="fa fa-trash" aria-hidden="true"></i>
                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                        <i class="fa fa-eye" aria-hidden="true"></i>
                    </td>
                </tr>
                <tr>
                    <td>U02</td>
                    <td>Jane</td>
                    <td>Black</td>
                    <td>Software Engineer</td>
                    <td>IT</td>
                    <td>black@gmail.com</td>
                    <td>0755636943</td>
                    <td>Kololo</td>
                    <td class="active"><span>Active</span></td>
                    <td class="action">
                        <i class="fa fa-trash" aria-hidden="true"></i>
                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                        <i class="fa fa-eye" aria-hidden="true"></i>
                    </td>
                </tr>
                <tr>
                    <td>U03</td>
                    <td>Chris</td>
                    <td>James</td>
                    <td>Teller</td>
                    <td>Accounts</td>
                    <td>james@gmail.com</td>
                    <td>0751234567</td>
                    <td>Bugonga</td>
                    <td class="active"><span>Active</span></td>
                    <td class="action">
                        <i class="fa fa-trash" aria-hidden="true"></i>
                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                        <i class="fa fa-eye" aria-hidden="true"></i>
                    </td>
                </tr>
                <tr>
                    <td>U01</td>
                    <td>Kemigisha</td>
                    <td>Michelle</td>
                    <td>Human Resource Manager</td>
                    <td>Human Resource</td>
                    <td>kemigishamichelle77@gmail.com</td>
                    <td>0755636943</td>
                    <td>Kawuuku</td>
                    <td class="suspend"><span>Inactive</span></td>
                    <td class="action">
                        <i class="fa fa-trash" aria-hidden="true"></i>
                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                        <i class="fa fa-eye" aria-hidden="true"></i>
                    </td>
                </tr>
            </table>
        </div>
    </section>
</template>
<style scoped>
section {
    display: grid;
    grid-template-columns: 1fr;
}

section h2 {
    margin-top: 1rem;
}

section table tr .suspend span {
    padding: 0.3rem;
    color: red;
    font-size: 0.7rem;
    font-weight: bold;
}

section table tr .active span {
    padding: 0.3rem;
    color: skyblue;
    font-size: 0.7rem;
    font-weight: bold;
}

section table tr .action i {
    font-size: 1rem;
    margin-left: 0.5rem;
    color: red;
}

/* Media queries */
@media screen and (max-width:1200px) {
    section div {
        overflow-x: auto;
        width: 100%;
    }
}
</style>