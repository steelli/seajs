print('----- Script BEGIN -----')

var Z = 'script-z'

print('X = ' + (typeof X === 'undefined' ? 'undefined' : X))
print('Y = ' + (typeof Y === 'undefined' ? 'undefined' : Y))
print('Z = ' + (typeof Z === 'undefined' ? 'undefined' : Z))

print('window.X = ' + window.X)

print('this === window ? ' + (this === window))
print('this === frag ? ' + (this === frag))

print('----- Script END -----')
