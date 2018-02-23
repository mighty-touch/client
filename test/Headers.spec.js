import { shallow } from 'vue-test-utils'
import Headers from '@/views/Headers.vue'

describe('Headers.vue', () => {

  it('should contain h3 title', () => {
    const wrapper = shallow(Headers)
    const title = wrapper.find('h3')
    expect(title.text()).toContain('Mighty')
  })

})
