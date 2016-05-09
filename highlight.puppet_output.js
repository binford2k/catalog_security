hljs.registerLanguage('puppet_output', function(hljs) {
  var PUPPET_INFO = {
    className: 'info',
    begin: '^[iI]nfo:',
    end: '$',
    relevance: 10
  };

  var PUPPET_NOTICE = {
    className: 'notice',
    begin: '^[nN]otice:',
    end: '$',
    relevance: 10
  };

  var PUPPET_WARNING = {
    className: 'warning',
    begin: '^[wW]arning:',
    end: '$',
    relevance: 10
  };

  var PUPPET_ERROR = {
    className: 'error',
    begin: '^[eE]rror:',
    end: '$',
    relevance: 10
  };

  return {
    contains: [
      PUPPET_INFO,
      PUPPET_NOTICE,
      PUPPET_WARNING,
      PUPPET_ERROR
    ]
  };
});
