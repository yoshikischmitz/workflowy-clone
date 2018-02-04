const InitialState = {
  items: {
    '60d03aeb-b3ac-476a-a0e6-d24649d7357d': {
      id: '60d03aeb-b3ac-476a-a0e6-d24649d7357d',
      content: 'Home',
      parent: null
    },
    'b924edf0-4761-47d0-a19b-01e68dd2c116': {
      content: 'Made with ReactJS + Redux by Yoshiki Schmitz',
      id: 'b924edf0-4761-47d0-a19b-01e68dd2c116',
      parent: '60d03aeb-b3ac-476a-a0e6-d24649d7357d'
    },
    'ed168aac-5f07-426a-8e69-8759c0903eab': {
      content: 'Basic Features:',
      parent: 'b924edf0-4761-47d0-a19b-01e68dd2c116',
      id: 'ed168aac-5f07-426a-8e69-8759c0903eab'
    },
    '85315d7e-5bba-4a8e-9d39-34ed124974eb': {
      content: 'Add new list items with Enter',
      parent: 'ed168aac-5f07-426a-8e69-8759c0903eab',
      id: '85315d7e-5bba-4a8e-9d39-34ed124974eb'
    },
    'b324b30a-3c68-4b77-8c81-fd620c40b8ef': {
      content: 'Move around the list hierarchy with the up and down arrow keys',
      id: 'b324b30a-3c68-4b77-8c81-fd620c40b8ef',
      parent: 'ed168aac-5f07-426a-8e69-8759c0903eab'
    },
    '713c7b9f-aa51-428c-b2db-d6284918c86f': {
      content: 'Change the indentation with Tab and Shift + Tab',
      id: '713c7b9f-aa51-428c-b2db-d6284918c86f',
      parent: 'ed168aac-5f07-426a-8e69-8759c0903eab'
    },
    'e8422f1b-8f99-47b1-905b-599349750426': {
      content: 'Click on a bullet point to zoom into that item',
      parent: 'ed168aac-5f07-426a-8e69-8759c0903eab',
      id: 'e8422f1b-8f99-47b1-905b-599349750426'
    },
    '39222bbc-f19b-4c9e-8728-20329091f519': {
      content: 'Mark items as "Complete" with the menu that appears when you hover over an item',
      parent: 'ed168aac-5f07-426a-8e69-8759c0903eab',
      id: '39222bbc-f19b-4c9e-8728-20329091f519'
    },
    '8c786b5c-482e-4681-8e4e-33f493e5f4b5': {
      content: 'Implementation Notes For Those Curious:',
      id: '8c786b5c-482e-4681-8e4e-33f493e5f4b5',
      parent: 'b924edf0-4761-47d0-a19b-01e68dd2c116'
    },
    'b34d7ea0-e81e-416a-81a9-2784416c48dd': {
      content: 'Items are kept track of in an "items" object in the state. This maps an item to its content and parent by its id.',
      id: 'b34d7ea0-e81e-416a-81a9-2784416c48dd',
      parent: '864d7493-ff35-4d93-ae1c-2735ee7cf24f'
    },
    '903f7c6f-e491-47f0-8a7e-175761648451': {
      content: 'The children of each item(the sublists) are indexed in another object, "itemOnItems". This maps one item id to an array of many item ids.',
      id: '903f7c6f-e491-47f0-8a7e-175761648451',
      parent: '864d7493-ff35-4d93-ae1c-2735ee7cf24f'
    },
    '57b5c05f-80a1-482d-bb19-e080827607b2': {
      content: 'This flat data structure makes it easy to ',
      parent: '864d7493-ff35-4d93-ae1c-2735ee7cf24f',
      id: '57b5c05f-80a1-482d-bb19-e080827607b2'
    },
    'fabea482-0ec8-4d19-8d2e-a0476d808570': {
      content: 'Indenting and Unindenting',
      parent: '8c786b5c-482e-4681-8e4e-33f493e5f4b5',
      id: 'fabea482-0ec8-4d19-8d2e-a0476d808570'
    },
    '864d7493-ff35-4d93-ae1c-2735ee7cf24f': {
      content: 'Data Structure',
      id: '864d7493-ff35-4d93-ae1c-2735ee7cf24f',
      parent: '8c786b5c-482e-4681-8e4e-33f493e5f4b5'
    },
    'ebf3d23e-a2d4-437d-abb4-7dc137bb9b00': {
      content: 'insert new items',
      parent: '57b5c05f-80a1-482d-bb19-e080827607b2',
      id: 'ebf3d23e-a2d4-437d-abb4-7dc137bb9b00'
    },
    '9db695d0-5a11-429f-b1d3-54721e17cea7': {
      content: 'parent/reparent items',
      id: '9db695d0-5a11-429f-b1d3-54721e17cea7',
      parent: '57b5c05f-80a1-482d-bb19-e080827607b2'
    },
    '983f2a36-fde3-4a5a-8ba0-22f078170420': {
      content: 'or find nodes that are visually adjacent',
      parent: '57b5c05f-80a1-482d-bb19-e080827607b2',
      id: '983f2a36-fde3-4a5a-8ba0-22f078170420'
    },
    'b9407c6d-be7d-4b04-ad1d-a75dcd5dd33a': {
      content: 'When you indent an item, the reducer finds an item above the current one, and reparents the item to that one',
      parent: 'fabea482-0ec8-4d19-8d2e-a0476d808570',
      id: 'b9407c6d-be7d-4b04-ad1d-a75dcd5dd33a'
    },
    'e8e094ad-06fb-42eb-b3ea-5b5cc4d13cf9': {
      content: 'When you unindent an item, the reducer looks for that item\'s grandparent. If it exists, that item is reparented to be a child of its grandparent',
      parent: 'fabea482-0ec8-4d19-8d2e-a0476d808570',
      id: 'e8e094ad-06fb-42eb-b3ea-5b5cc4d13cf9'
    },
    'e86f839a-6795-4118-ac11-2051315203e9': {
      content: 'Moving up and Down in the list',
      parent: '8c786b5c-482e-4681-8e4e-33f493e5f4b5',
      id: 'e86f839a-6795-4118-ac11-2051315203e9'
    },
    '56b76a7d-fa6b-4d26-b243-122690bec69a': {
      content: 'When you move up in the list, you want the cursor to go to the item visually above the current one, regardless of where it is in the depth hierarchy',
      parent: 'e86f839a-6795-4118-ac11-2051315203e9',
      id: '56b76a7d-fa6b-4d26-b243-122690bec69a'
    },
    'fc6bd8da-3f98-4ec4-8e2b-8dcfb1d7671b': {
      content: 'If the current item is the first amongst its siblings, then the cursor moves to its parent.\n',
      id: 'fc6bd8da-3f98-4ec4-8e2b-8dcfb1d7671b',
      parent: '56b76a7d-fa6b-4d26-b243-122690bec69a'
    },
    '1f081bf9-d595-4b2f-918b-5829976b5d34': {
      content: 'If that sibling does have children, repeat the previous step beginning with the last child of that sibling.',
      parent: '56b76a7d-fa6b-4d26-b243-122690bec69a',
      id: '1f081bf9-d595-4b2f-918b-5829976b5d34'
    },
    'a180e8ed-56c5-4e9f-b7c0-b302149fb914': {
      content: 'Otherwise we need to find the sibling that precedes the current item. If that sibling exists and it has no children, we change the cursor to that item.',
      id: 'a180e8ed-56c5-4e9f-b7c0-b302149fb914',
      parent: '56b76a7d-fa6b-4d26-b243-122690bec69a'
    },
    '062bdb19-4c37-4e90-ba1b-e6a8e31dea46': {
      content: 'Moving down in the list is similar, you want the cursor to go to the item visually below the current one, regardless of where it is in the depth hierarchy',
      parent: 'e86f839a-6795-4118-ac11-2051315203e9',
      id: '062bdb19-4c37-4e90-ba1b-e6a8e31dea46'
    },
    '6cf2eb03-7cd8-460f-a802-a4f2355f23a2': {
      content: 'If the current item has any children, then move the cursor to its first child.',
      parent: '062bdb19-4c37-4e90-ba1b-e6a8e31dea46',
      id: '6cf2eb03-7cd8-460f-a802-a4f2355f23a2'
    },
    '05a39116-23fe-48cc-8f31-b6f5d7cc9550': {
      content: 'If the current node is the last child, then see if the current node\'s parent has any children which are not the last child amongst their siblings. ',
      parent: '062bdb19-4c37-4e90-ba1b-e6a8e31dea46',
      id: '05a39116-23fe-48cc-8f31-b6f5d7cc9550'
    },
    'd674f62b-fa83-4145-b242-9a73891576cc': {
      content: 'if such a child exists, change the focus. Otherwise change the current node to the current node\'s parent and repeat.\n\n',
      parent: '062bdb19-4c37-4e90-ba1b-e6a8e31dea46',
      id: 'd674f62b-fa83-4145-b242-9a73891576cc'
    },
    'f323ead4-39f8-437d-94bb-927ac8f67c8c': {
      content: 'State management',
      parent: '8c786b5c-482e-4681-8e4e-33f493e5f4b5',
      id: 'f323ead4-39f8-437d-94bb-927ac8f67c8c'
    },
    'b32b079b-ec39-45ac-b80d-c30975cca625': {
      content: 'Redux handles all the state. I haven\'t had to do anything special.',
      id: 'b32b079b-ec39-45ac-b80d-c30975cca625',
      parent: 'f323ead4-39f8-437d-94bb-927ac8f67c8c'
    }
  },
  itemOnItems: {
    '60d03aeb-b3ac-476a-a0e6-d24649d7357d': [
      'b924edf0-4761-47d0-a19b-01e68dd2c116'
    ],
    'b924edf0-4761-47d0-a19b-01e68dd2c116': [
      'ed168aac-5f07-426a-8e69-8759c0903eab',
      '8c786b5c-482e-4681-8e4e-33f493e5f4b5'
    ],
    'ed168aac-5f07-426a-8e69-8759c0903eab': [
      'b324b30a-3c68-4b77-8c81-fd620c40b8ef',
      '713c7b9f-aa51-428c-b2db-d6284918c86f',
      'e8422f1b-8f99-47b1-905b-599349750426',
      '39222bbc-f19b-4c9e-8728-20329091f519',
      '85315d7e-5bba-4a8e-9d39-34ed124974eb'
    ],
    '85315d7e-5bba-4a8e-9d39-34ed124974eb': [],
    'b324b30a-3c68-4b77-8c81-fd620c40b8ef': [],
    '713c7b9f-aa51-428c-b2db-d6284918c86f': [],
    'e8422f1b-8f99-47b1-905b-599349750426': [],
    '39222bbc-f19b-4c9e-8728-20329091f519': [],
    'db26f0c4-2353-4ab0-9b68-60ebf4309715': [],
    '8c786b5c-482e-4681-8e4e-33f493e5f4b5': [
      '864d7493-ff35-4d93-ae1c-2735ee7cf24f',
      'f323ead4-39f8-437d-94bb-927ac8f67c8c',
      'fabea482-0ec8-4d19-8d2e-a0476d808570',
      'e86f839a-6795-4118-ac11-2051315203e9'
    ],
    'b34d7ea0-e81e-416a-81a9-2784416c48dd': [],
    '903f7c6f-e491-47f0-8a7e-175761648451': [],
    '57b5c05f-80a1-482d-bb19-e080827607b2': [
      'ebf3d23e-a2d4-437d-abb4-7dc137bb9b00',
      '9db695d0-5a11-429f-b1d3-54721e17cea7',
      '983f2a36-fde3-4a5a-8ba0-22f078170420'
    ],
    '0a21f2d5-d155-42b2-be47-32222879959e': [],
    'fabea482-0ec8-4d19-8d2e-a0476d808570': [
      'b9407c6d-be7d-4b04-ad1d-a75dcd5dd33a',
      'e8e094ad-06fb-42eb-b3ea-5b5cc4d13cf9'
    ],
    '864d7493-ff35-4d93-ae1c-2735ee7cf24f': [
      'b34d7ea0-e81e-416a-81a9-2784416c48dd',
      '903f7c6f-e491-47f0-8a7e-175761648451',
      '57b5c05f-80a1-482d-bb19-e080827607b2'
    ],
    'ebf3d23e-a2d4-437d-abb4-7dc137bb9b00': [],
    '9db695d0-5a11-429f-b1d3-54721e17cea7': [],
    '983f2a36-fde3-4a5a-8ba0-22f078170420': [],
    'b9407c6d-be7d-4b04-ad1d-a75dcd5dd33a': [],
    'e8e094ad-06fb-42eb-b3ea-5b5cc4d13cf9': [],
    'e86f839a-6795-4118-ac11-2051315203e9': [
      '56b76a7d-fa6b-4d26-b243-122690bec69a',
      '062bdb19-4c37-4e90-ba1b-e6a8e31dea46'
    ],
    '56b76a7d-fa6b-4d26-b243-122690bec69a': [
      'fc6bd8da-3f98-4ec4-8e2b-8dcfb1d7671b',
      'a180e8ed-56c5-4e9f-b7c0-b302149fb914',
      '1f081bf9-d595-4b2f-918b-5829976b5d34'
    ],
    'fc6bd8da-3f98-4ec4-8e2b-8dcfb1d7671b': [],
    '1f081bf9-d595-4b2f-918b-5829976b5d34': [],
    'a180e8ed-56c5-4e9f-b7c0-b302149fb914': [],
    '062bdb19-4c37-4e90-ba1b-e6a8e31dea46': [
      '6cf2eb03-7cd8-460f-a802-a4f2355f23a2',
      '05a39116-23fe-48cc-8f31-b6f5d7cc9550',
      'd674f62b-fa83-4145-b242-9a73891576cc'
    ],
    '6cf2eb03-7cd8-460f-a802-a4f2355f23a2': [],
    '05a39116-23fe-48cc-8f31-b6f5d7cc9550': [],
    'd674f62b-fa83-4145-b242-9a73891576cc': [],
    'f323ead4-39f8-437d-94bb-927ac8f67c8c': [
      'b32b079b-ec39-45ac-b80d-c30975cca625'
    ],
    'b32b079b-ec39-45ac-b80d-c30975cca625': [],
    '840f3065-62d5-445c-8203-cd25869b5e68': []
  },
  focus: {
    id: 'b32b079b-ec39-45ac-b80d-c30975cca625',
    cursorPosition: 66
  },
  root: '60d03aeb-b3ac-476a-a0e6-d24649d7357d'
}

export default InitialState
