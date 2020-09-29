/**
 * @flow
 */

import React from 'react'
import { Divider } from '../../../../common/components'
import LabeledInput from './LabeledInput'

type Props = {
  index: number
}

function Certification({ index }: Props) {
  return (
    <div>
      {index > 0 ? <Divider /> : null}
      <LabeledInput
        name={`certifications[${index}].title`}
        label="Certificate / Award Name"
        placeholder="Supreme Hacker"
      />
      <LabeledInput
        name={`certifications[${index}].date`}
        label="Certificate /  Date"
        placeholder="May 2015"
      />
      <LabeledInput
        name={`certifications[${index}].awarder`}
        label="Awarder/Issuer"
        placeholder="HackNY"
      />
      <LabeledInput
        name={`certifications[${index}].summary`}
        label="Link"
        placeholder="Certification URL"
      />
    </div>
  )
}

export default Certification
