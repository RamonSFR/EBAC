module.exports = (grunt) => {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
    })

    grunt.registerTask('olaGrunt', function() {
        const done = this.async();
        setTimeout(() => {
            console.log("Olá grunt");
            done();
        }, 3000);
    })

    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', [
        'olaGrunt'
    ]);
}