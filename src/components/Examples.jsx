import { EXAMPLES } from '../data.js';
import { useState } from 'react';
import Section from './Section.jsx';
import TabButton from './TabButton.jsx'
import Tabs from './Tabs.jsx';
export default function Examples(){
    const [selectedTopic, setSelectedTopic] = useState('');
  let tabContent ='Please Click a button';
  function handleSelect(selectedButton){

    setSelectedTopic(selectedButton);
  }
    return(
        <Section title="Examples" id="examples">
            <Tabs></Tabs>
          <h2>Examples</h2>
        
        <h2>Time to get started!</h2>
        <menu>
          <TabButton isSelected={selectedTopic ==='components'} onSelect={()=>handleSelect('components')}>Components</TabButton>
          <TabButton isSelected={selectedTopic ==='jsx'} onSelect={()=>handleSelect('jsx')}>Jsx</TabButton>
          <TabButton isSelected={selectedTopic ==='props'} onSelect={()=>handleSelect('props')}>Props</TabButton>
          <TabButton isSelected={selectedTopic ==='state'} onSelect={()=>handleSelect('state')}>State</TabButton>
        </menu>
        
          {!selectedTopic ? <p>Please select a topic</p> : null}
          {selectedTopic ?(
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>):null}
          </Section>
    );
}