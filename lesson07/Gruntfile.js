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
            options: {
                compress: true
            }, 
           build1: {
                files: {
                    // 'build/styles.css': ['src/style1.less', 'src/style2.less']
                    // 'build/styles.css': 'src/*.less'
                    'styles1.css': '*.less'
                }
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

