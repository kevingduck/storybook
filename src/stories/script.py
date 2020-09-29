components = [
# 'breadcrumbs',
# 'checkboxes',
# 'actionbuttons',
# 'dropdowns',
# 'links',
# 'listboxes',
# 'listbuilder',
# 'progressindicators',
'progressivedisclosure',
'radiobuttons',
'searchboxes',
'searchresults',
'steppers',
'tables',
'tabs',
'textareas',
'toggles',
'tooltips',
'dateentry',
'datepicker',
'phoneinput',
'emailinput',
'paymentinput',
'acknowledgements',
'header',
'footer',
'navigation',
'filtering',
'layout',
'responsiveness',
'breakpoints',
'grid',
'fonts',
'hierarchy',
'errors',
'warnings',
'confirmations',
'notifications',
]

base_css = open("base.css", "r").read()
base_js = open("base.js", "r").read()
base_stories = open("base.stories.js", "r").read()

for c in components:
  for t in [".css", ".js", ".stories.js"]:
    filename = c + t
    f = open(filename, "a")   
    if t == ".css":
        f.write(base_css)
    elif t == ".js":
        f.write(base_js)
    elif t == ".stories.js":
        f.write(base_stories)    
    else:
        print('exited')
        
    f.close()