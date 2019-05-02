module.exports = function(grunt) {

    // config
    grunt.initConfig({
        less: {
            build: {
                src: 'style1.less',
                dest: 'styles.css'
            }
        }
    });

    // plugin
    grunt.loadNpmTasks('grunt-contrib-less');

    // tasks
    grunt.registerTask('default', 'less');

};

