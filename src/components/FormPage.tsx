import React, {useState} from 'react';

interface FormPage {
   inputs: number;
   textarea: number;
   checkboxes: number;
}

const FormPage: React.FC = () => {
   const [counts, setCounts] = useState<FormPage>({inputs: 0, textarea: 0, checkboxes: 0});
   const [formElements, setFormElements] = useState<React.ReactNode[]>([]);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const {name, value} = e.target;
      setCounts((prev) => ({...prev, [name]: Number(value)}));
   };

   const buildForm = () => {
      const inputs = Array.from({length: counts.inputs}, (_, i) => (
         <input key={`input-${i}`} type='text' placeholder={`Input ${i + 1}`}/>
      ));
      const textarea = Array.from({length: counts.textarea}, (_, i) => (
         <textarea key={`textarea-${i}`} placeholder={`textarea ${i + 1}`}/>
      ))
      const checkboxes = Array.from({length: counts.checkboxes}, (_, i) => (
         <div key={`checkbox-${i}`}>
            <input type='checkbox' id={`Checkbox ${i}`}/>
            <label htmlFor={`checkbox-${i}`}>{`Checkbox ${i + 1}`}</label>
         </div>
      ))
      setFormElements([...inputs, ...textarea, ...checkboxes]);
   }

   return (
      <div>
         <div>
            <label>
               inputs: <input type='number'
                              name='inputs'
                              value={counts.inputs}
                              onChange={handleChange}
                              min={0}/>
            </label>
            <label>
               textarea: <input type='number'
                                name='textarea'
                                value={counts.textarea}
                                onChange={handleChange}
                                min={0}/>
            </label>
            <label>
               checkboxes: <input type='number'
                                  name='checkboxes'
                                  value={counts.checkboxes}
                                  onChange={handleChange}
                                  min={0}/>
            </label>
            <button onClick={buildForm}>Build</button>
         </div>
         <div>
            {formElements}
         </div>
      </div>
   );
};

export default FormPage;