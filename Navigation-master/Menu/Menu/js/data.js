


var tree = [
          {
            text: 'Truck 1',
            href: '#parent1',
            tags: ['1'],
            nodes: [{
                text: 'Pallet 1',
                href: '#child1',
                tags: ['2'],
                nodes: [{
                    text: 'Box 1',
                    href: '#grandchild1',
                    tags: ['20']
                  },
                  {
                    text: 'Box 2',
                    href: '#grandchild2',
                    tags: ['11']
                  }]},
              {
                text: 'Pallet 2',
                href: '#child2',
                tags: ['0']
              }
            ]
          },
          {
            text: 'Truck 2',
            href: '#parent2',
            tags: ['0']
          },
          {
            text: 'Truck 3',
            href: '#parent3',
             tags: ['0']
          },
          {
            text: 'Truck 4',
            href: '#parent4',
            tags: ['0']
          },
          {
            text: 'Truck 5',
            href: '#parent5'  ,
            tags: ['0']
          }
        ];