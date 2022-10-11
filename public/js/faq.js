function searchTable(value) {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("SearchInput");
    filter = value?.toUpperCase() ?? input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        tdAlias = tr[i].getElementsByTagName("td")[1];
        if (td || tdAlias) {
            txtValue = td.textContent || td.innerText;
            txtValueAlias = tdAlias.textContent || tdAlias.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValueAlias.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
$(window).ready(function(){
    const hash = new URL(window.location.href).hash;

    if(hash && hash === "#football-leagues") {
        searchTable("leagues");

        $("#SearchInput").val("leagues");
    }
})
