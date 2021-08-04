function myFunction() {

    const alljacekclasses = document.getElementById("Jacekid").className


    if (!alljacekclasses.includes("Jacekfucking")) {
        document.getElementById("Jacekid").classList.add("Jacekfucking")
    }
    if (alljacekclasses.includes("Jacekfucking")) {
        document.getElementById("Jacekid").classList.remove("Jacekfucking")
    }

}