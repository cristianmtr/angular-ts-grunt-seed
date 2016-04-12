module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            dist: {
                options: {
                    port: 5000
                }
            }
        },
        ts: {
            lib: {
                src: ['ts/*.ts', 'ts/typings/**/*.ts'],
                out: 'js/index.js',
                options: {
                    target: 'es3',
                    sourceMaps: false,
                    declaration: true,
                    removeComments: false
                }
            }
        },
        watch: {
            files: 'ts/*.ts',
            tasks: ['ts:lib']
        },
        open: {
            dev: {
                path: 'http://localhost:5000/'
            }
        }
    });

    grunt.registerTask('default', ['ts', 'connect', 'open', 'watch']);

};