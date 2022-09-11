import { defineStore } from "pinia";
import { sleep } from "../helpers/sleep"

export type Length = 'short' | 'medium' | 'long'
export type Culture = 'culture1' | 'culture2' | 'culture3'
export type Religion = 'religion1' | 'religion2' | 'religion3'
export type Style = 'style1' | 'style2' | 'style3' 

export interface IScriptCard {
  id: string,
  updatedAt: string,
  name: string
}

export interface IScript {
  id: string,
  name: string,
  elements: Array<IElement>
}

export interface IElement {
  id: string,
  name: string,
  content: string,
  type: IElementTypeCard
}

export interface IElementTypeCard {
  id: string,
  name: string
}

export interface IElementType {
  id: string,
  name: string,
  description: string
}

export interface IElementTemplate {
  id: string,
  name: string,
  content: string,
  type: IElementTypeCard,
  length: Length,
  culture: Array<Culture>,
  religion: Array<Religion>,
  style: Array<Style>
}

export interface IScriptInput {
  id?: string,
  name: string,
  elements: IElementInput
}

export interface IElementInput {
  id?: string,
  name: string,
  content: string,
  typeId: string
}

export const scriptStore = defineStore("script", {
  state: () => ({
    scriptCards: Array<IScriptCard>(),
    script: Object() as IScript,
    scriptTemplates: Array<IScript>(),
    elementTemplates: Array<IElementTemplate>(),
    elementTypes: Array<IElementType>(),
    scriptInput: Object() as IScriptInput
  }),

  actions: {
    async getScriptCards(ceremonyId: string) {
      console.log(`Getting script cards for ceremony with ID of ${ceremonyId}`)
      await sleep(1500)
      const scriptCards: Array<IScriptCard> = [
        {
          id: '1',
          updatedAt: 'June 12, 2021',
          name: 'Etiam vestibulum'
        },
        {
          id: '2',
          updatedAt: 'January 17, 2022',
          name: 'Morbi eleifend congue'
        }
      ]
      this.scriptCards = scriptCards
      return scriptCards
    },

    async getScript(scriptId: string) {
      console.log(`Getting script with ID of ${scriptId}`)
      await sleep(500)
      const script: IScript = {
        id: '1',
        name: 'Pharetra  & Faucibus’s Ceremony Script',
        elements: [
          {
            id: '1',
            name: 'Velit consequat arcu, iaculis',
            content: 'Ornare gravida pellentesque odio in dis enim lacus. Nunc risus id nascetur tempus. Ipsum arcu tellus quis pharetra, in duis viverra. Morbi placerat ullamcorper at adipiscing nunc eu ornare in sollicitudin. Mi faucibus elit viverra adipiscing velit pulvinar. Morbi nisl aliquet et blandit et bibendum magna. Quis nunc imperdiet curabitur nulla. Vivamus ultrices varius ipsum, suscipit odio mauris vitae congue mi. Aliquam erat facilisis quis neque. Bibendum tellus mauris ac nulla fames adipiscing. Faucibus congue sagittis, arcu, eget ac hac ut tempor sed. Nisi, dignissim velit maecenas mi sit. Volutpat adipiscing auctor ut nulla ipsum velit. Neque tincidunt vulputate sed erat diam amet. Ipsum tincidunt adipiscing pharetra id id. Luctus diam id posuere ullamcorper aliquet mi. Diam nec dictum magna tempor nec. Varius integer accumsan dignissim quam at condimentum ullamcorper metus. Pellentesque nisl facilisis amet pellentesque massa ridiculus duis. Ullamcorper elementum neque ullamcorper integer nibh scelerisque iaculis lacus. Sed mauris, vitae in vulputate purus rutrum morbi imperdiet. Nisi et gravida quis ultrices ut massa viverra ac et. Curabitur id at scelerisque scelerisque.',
            type: {
              id: '1',
              name: 'Sollicitudin ornare'
            }
          },
          {
            id: '2',
            name: 'Iaculis valit',
            content: 'Pellentesque odio in dis enim lacus. Nunc risus id nascetur tempus. Ipsum arcu tellus quis pharetra, in duis viverra. Morbi placerat ullamcorper at adipiscing nunc eu ornare in sollicitudin. Mi faucibus elit viverra adipiscing velit pulvinar. Morbi nisl aliquet et blandit et bibendum magna. Quis nunc imperdiet curabitur nulla. Vivamus ultrices varius ipsum, suscipit odio mauris vitae congue mi. Aliquam erat facilisis quis neque. Bibendum tellus mauris ac nulla fames adipiscing. Faucibus congue sagittis, arcu, eget ac hac ut tempor sed. Nisi, dignissim velit maecenas mi sit. Volutpat adipiscing auctor ut nulla ipsum velit. Neque tincidunt vulputate sed erat diam amet. Ipsum tincidunt adipiscing pharetra id id. Luctus diam id posuere ullamcorper aliquet mi. Diam nec dictum magna tempor nec. Varius integer accumsan dignissim quam at condimentum ullamcorper metus. Pellentesque nisl facilisis amet pellentesque massa ridiculus duis. Ullamcorper elementum neque ullamcorper integer nibh scelerisque iaculis lacus. Sed mauris, vitae in vulputate purus rutrum morbi imperdiet.',
            type: {
              id: '2',
              name: 'Eranrornare'
            }
          }
        ]
      }
      this.script = script
      return script
    },

    updateScript() {

    },

    addScript(scriptTemplateId: string) {
      console.log("adding",scriptTemplateId)
    },

    deleteScript() {

    },

    async getElementTypes() {
      console.log(`Getting all element types`)
      await sleep(1000)
      const elementTypes: Array<IElementType> = [
        {
          id: '1',
          name: 'Iaculis hac augue',
          description: 'Sit volutpat risus vulputate gravida condimentum commodo. Placerat habitant id penatibus mattis odio consectetur fames. Donec fusce nam a massa id sit. Enim duis rutrum mus urna bibendum. In dolor massa vivamus interdum purus lectus euismod.'
        },
        {
          id: '2',
          name: 'Auge volutpat',
          description: 'Gravida condimentum commodo. Placerat habitant id penatibus mattis odio consectetur fames. Donec fusce nam a massa id sit. Enim duis rutrum mus urna bibendum. In dolor massa vivamus interdum purus lectus euismod.'
        },
        {
          id: '3',
          name: 'Commodo gravida',
          description: 'Placerat habitant id penatibus mattis odio consectetur fames. Donec fusce nam a massa id sit. Enim duis rutrum mus urna bibendum. In dolor massa vivamus interdum purus lectus euismod.'
        },
      ]
      this.elementTypes = elementTypes
      return elementTypes
    },

    async getElementTemplates(typeId: string) {
      console.log(`Getting element templates with type ID of ${typeId}`)
      await sleep(2000)
      const elementTemplates: Array<IElementTemplate> = [
        {
          id: '1',
          name: 'Velit consequat arcu, iaculis',
          content: 'Ornare gravida pellentesque odio in dis enim lacus. Nunc risus id nascetur tempus. Ipsum arcu tellus quis pharetra, in duis viverra. Morbi placerat ullamcorper at adipiscing nunc eu ornare in sollicitudin. Mi faucibus elit viverra adipiscing velit pulvinar. Morbi nisl aliquet et blandit et bibendum magna. Quis nunc imperdiet curabitur nulla. Vivamus ultrices varius ipsum, suscipit odio mauris vitae congue mi. Aliquam erat facilisis quis neque. Bibendum tellus mauris ac nulla fames adipiscing. Faucibus congue sagittis, arcu, eget ac hac ut tempor sed. Nisi, dignissim velit maecenas mi sit. Volutpat adipiscing auctor ut nulla ipsum velit. Neque tincidunt vulputate sed erat diam amet. Ipsum tincidunt adipiscing pharetra id id. Luctus diam id posuere ullamcorper aliquet mi. Diam nec dictum magna tempor nec. Varius integer accumsan dignissim quam at condimentum ullamcorper metus. Pellentesque nisl facilisis amet pellentesque massa ridiculus duis. Ullamcorper elementum neque ullamcorper integer nibh scelerisque iaculis lacus. Sed mauris, vitae in vulputate purus rutrum morbi imperdiet. Nisi et gravida quis ultrices ut massa viverra ac et. Curabitur id at scelerisque scelerisque.',
          type: {
            id: '1',
            name: 'Sollicitudin ornare'
          },
          length: 'long',
          culture: ['culture1', 'culture2'],
          religion: ['religion2'],
          style: ['style1']
        },
        {
          id: '1',
          name: 'Iaculis valit',
          content: 'Pellentesque odio in dis enim lacus. Nunc risus id nascetur tempus. Ipsum arcu tellus quis pharetra, in duis viverra. Morbi placerat ullamcorper at adipiscing nunc eu ornare in sollicitudin. Mi faucibus elit viverra adipiscing velit pulvinar. Morbi nisl aliquet et blandit et bibendum magna. Quis nunc imperdiet curabitur nulla. Vivamus ultrices varius ipsum, suscipit odio mauris vitae congue mi. Aliquam erat facilisis quis neque. Bibendum tellus mauris ac nulla fames adipiscing. Faucibus congue sagittis, arcu, eget ac hac ut tempor sed. Nisi, dignissim velit maecenas mi sit. Volutpat adipiscing auctor ut nulla ipsum velit. Neque tincidunt vulputate sed erat diam amet. Ipsum tincidunt adipiscing pharetra id id. Luctus diam id posuere ullamcorper aliquet mi. Diam nec dictum magna tempor nec. Varius integer accumsan dignissim quam at condimentum ullamcorper metus. Pellentesque nisl facilisis amet pellentesque massa ridiculus duis. Ullamcorper elementum neque ullamcorper integer nibh scelerisque iaculis lacus. Sed mauris, vitae in vulputate purus rutrum morbi imperdiet.',
          type: {
            id: '2',
            name: 'Eranrornare'
          },
          length: 'short',
          culture: ['culture3', 'culture2'],
          religion: ['religion3'],
          style: ['style2']
        }
      ]
      this.elementTemplates = elementTemplates
      return elementTemplates
    },

    async getScriptTemplates() {
      console.log(`Getting script templates`)
      await sleep(1000)
      const scriptTemplates: Array<IScript> = [
        {
          id: '1',
          name: 'Template 1 Ceremony Script',
          elements: [
            {
              id: '1',
              name: 'Iaculis valit',
              content: 'Pellentesque odio in dis enim lacus. Nunc risus id nascetur tempus. Ipsum arcu tellus quis pharetra, in duis viverra. Morbi placerat ullamcorper at adipiscing nunc eu ornare in sollicitudin. Mi faucibus elit viverra adipiscing velit pulvinar. Morbi nisl aliquet et blandit et bibendum magna. Quis nunc imperdiet curabitur nulla. Vivamus ultrices varius ipsum, suscipit odio mauris vitae congue mi. Aliquam erat facilisis quis neque. Bibendum tellus mauris ac nulla fames adipiscing. Faucibus congue sagittis, arcu, eget ac hac ut tempor sed. Nisi, dignissim velit maecenas mi sit. Volutpat adipiscing auctor ut nulla ipsum velit. Neque tincidunt vulputate sed erat diam amet. Ipsum tincidunt adipiscing pharetra id id. Luctus diam id posuere ullamcorper aliquet mi. Diam nec dictum magna tempor nec. Varius integer accumsan dignissim quam at condimentum ullamcorper metus. Pellentesque nisl facilisis amet pellentesque massa ridiculus duis. Ullamcorper elementum neque ullamcorper integer nibh scelerisque iaculis lacus. Sed mauris, vitae in vulputate purus rutrum morbi imperdiet.',
              type: {
                id: '2',
                name: 'Eranrornare'
              }
            }
          ]
        },
        {
          id: '2',
          name: 'Template 2 Ceremony Script',
          elements: [
            {
              id: '1',
              name: 'Velit consequat arcu, iaculis',
              content: 'Ornare gravida pellentesque odio in dis enim lacus. Nunc risus id nascetur tempus. Ipsum arcu tellus quis pharetra, in duis viverra. Morbi placerat ullamcorper at adipiscing nunc eu ornare in sollicitudin. Mi faucibus elit viverra adipiscing velit pulvinar. Morbi nisl aliquet et blandit et bibendum magna. Quis nunc imperdiet curabitur nulla. Vivamus ultrices varius ipsum, suscipit odio mauris vitae congue mi. Aliquam erat facilisis quis neque. Bibendum tellus mauris ac nulla fames adipiscing. Faucibus congue sagittis, arcu, eget ac hac ut tempor sed. Nisi, dignissim velit maecenas mi sit. Volutpat adipiscing auctor ut nulla ipsum velit. Neque tincidunt vulputate sed erat diam amet. Ipsum tincidunt adipiscing pharetra id id. Luctus diam id posuere ullamcorper aliquet mi. Diam nec dictum magna tempor nec. Varius integer accumsan dignissim quam at condimentum ullamcorper metus. Pellentesque nisl facilisis amet pellentesque massa ridiculus duis. Ullamcorper elementum neque ullamcorper integer nibh scelerisque iaculis lacus. Sed mauris, vitae in vulputate purus rutrum morbi imperdiet. Nisi et gravida quis ultrices ut massa viverra ac et. Curabitur id at scelerisque scelerisque.',
              type: {
                id: '1',
                name: 'Sollicitudin ornare'
              }
            },
            {
              id: '2',
              name: 'Iaculis valit',
              content: 'Pellentesque odio in dis enim lacus. Nunc risus id nascetur tempus. Ipsum arcu tellus quis pharetra, in duis viverra. Morbi placerat ullamcorper at adipiscing nunc eu ornare in sollicitudin. Mi faucibus elit viverra adipiscing velit pulvinar. Morbi nisl aliquet et blandit et bibendum magna. Quis nunc imperdiet curabitur nulla. Vivamus ultrices varius ipsum, suscipit odio mauris vitae congue mi. Aliquam erat facilisis quis neque. Bibendum tellus mauris ac nulla fames adipiscing. Faucibus congue sagittis, arcu, eget ac hac ut tempor sed. Nisi, dignissim velit maecenas mi sit. Volutpat adipiscing auctor ut nulla ipsum velit. Neque tincidunt vulputate sed erat diam amet. Ipsum tincidunt adipiscing pharetra id id. Luctus diam id posuere ullamcorper aliquet mi. Diam nec dictum magna tempor nec. Varius integer accumsan dignissim quam at condimentum ullamcorper metus. Pellentesque nisl facilisis amet pellentesque massa ridiculus duis. Ullamcorper elementum neque ullamcorper integer nibh scelerisque iaculis lacus. Sed mauris, vitae in vulputate purus rutrum morbi imperdiet.',
              type: {
                id: '2',
                name: 'Eranrornare'
              }
            }
          ]
        }
      ]
      this.scriptTemplates = scriptTemplates
      return scriptTemplates
    }
  }
})
