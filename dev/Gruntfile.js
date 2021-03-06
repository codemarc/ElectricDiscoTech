module.exports = function(grunt) {
    grunt.initConfig({
        
        watch: {
            options: {
                livereload: false,
            },
            styles: {
                files: ['less/**/*.less', 'ts/**/*.ts'], // which files to watch
                tasks: ['less', 'ts', 'uglify'],
                options: {
                    nospawn: true
                }
            }
        },

        less: {
            development: {
                options: {
                    compress: true,
                    cleancss: false,
                    optimization: 2,
                    dumpLineNumbers: 'false'
                },
                files: {
                    "../css/style.min.css": "less/style.less",
                    "docs/css/style.min.css": "less/docs.less"
                }
            }
        },

        ts: {
            default: {
                outDir: "./js",
                src: ["**/*.ts", "typings/**/*.ts", "!node_modules/**/*.ts", "!bower_components/**/*.*"],
                options: {
                    verbose: true,
                    sourceMap: false
                }
            }
        },
        
        uglify: {
            options: {
                preserveComments: false
            },
            main: {
                files: {
                    '../js/edt.min.js': ['js/edt.js']
                    // '../js/login.min.js': ['js/login.js'],
                    // '../js/index.min.js': ['js/index.js'],
                    // '../js/test.min.js':
                    // [
                    //     'js/test/testobj.js'
                    //     , 'js/test/testobjs.js'
                    //     , 'js/test/tests.js'
                    //     , 'js/test/models.js'
                    //     , 'js/test/views.js'
                    //     , 'js/test/actions.js'
                    // ]
                }
            }
        }
            
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    
    grunt.registerTask('default', ['less', 'watch', 'ts']);
};
