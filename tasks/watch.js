var grunt = require('grunt');

module.exports = {
  assets: {
    files: ['public/**/*.*'],
    tasks: ['clean:assets', 'copy:assets'],
    options: {
      livereload: true,
      nospawn: true
    }
  },
  js: {
    files: ['app/**/*.js','app/*.*'],
    tasks: ['clean:app', 'copy:app', 'preprocess'],
    options: {
      livereload: true,
      nospawn: true
    }
  },
  hbs: {
    files: ['app/**/*.hbs'],
    tasks: ['clean:hbs', 'emberTemplates'],
    options: {
      livereload: true,
      nospawn: true
    }
  },
  vendor: {
    files: [
      'bower_components/**/*.*'
    ],
    tasks: ['clean:vendor', 'copy:vendor'],
    options: {
      livereload: true,
      nospawn: true
    }
  },
  less: {
    files: ['app/styles/**/*.less'],
    tasks: ['clean:styles', 'copy:less', 'less'],
    options: {
      livereload: true,
      nospawn: true
    }
  },
  templates: {
  	files: ['app/template.html'],
  	tasks: ['copy:templates'],
    options: {
      livereload: true,
      nospawn: true
    }
  },
  tests: {
    files: ['tests/**/*.*'],
    tasks: ['clean:tests', 'concat', 'copy:tests', 'preprocess'],
    options: {
      livereload: true,
      nospawn: true
    }
  },
};
