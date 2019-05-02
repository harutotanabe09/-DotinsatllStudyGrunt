module.exports = function(grunt) {

    // config
    grunt.initConfig({

        /*
        task: {
            target1: {
                設定
            },
            target2: {
                設定
            }
        }
        */

        less: {
            build1: {
                src: 'style1.less',
                dest: 'styles1.css'
            },
            build2: {
                src: 'style2.less',
                dest: 'styles2.css'
            }
        }

    });

    // plugin
    grunt.loadNpmTasks('grunt-contrib-less');

    // tasks
    grunt.registerTask('default', 'less');
    grunt.registerTask('task1', 'less:build1');
    grunt.registerTask('task2', 'less:build2');

};

