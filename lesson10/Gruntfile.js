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
           build: {
                files: {
                    'styles.css': '*.less'
                }
            }
        },

        csslint: {
            check: {
                src: 'styles.css'
            }
	},

        cssmin: {
            minimize: {
                files: {
                    'styles.min.css': 'styles.css'
                }
            }
        },

        watch: {
            files: '*.less',
            tasks: ['less', 'csslint', 'cssmin']
        }


    });

    // plugin
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // tasks 上でインストールしたプラグイン実行。順番重要
   grunt.registerTask('default', ['less', 'csslint', 'cssmin', 'watch']);

};

