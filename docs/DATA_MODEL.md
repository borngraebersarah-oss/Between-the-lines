# Fachliches Datenmodell — Vorschlag

Dieses Modell ist fachlich, nicht zwingend 1:1 das spätere Datenbankschema.

## ChatSpace

Ein analysierbarer Chat-/Beziehungsbereich.

Felder:
- id
- title
- participantIds[]
- selectedDyad: [participantAId, participantBId]
- relationshipContextId
- globalPeriodFilter
- dashboardConfig
- accessTier
- createdAt / updatedAt

## Participant

- id
- displayName
- normalizedNames[]
- initials
- avatarUrl/localAssetRef optional
- sleepProfile optional

## SleepProfile

- participantId
- typicalSleepTime optional
- typicalWakeTime optional
- mode: auto | user_hint

## ImportSource

- id
- chatSpaceId
- type: whatsapp_export | transcript | pasted_text
- importedAt
- sourceHash
- dateRange optional
- metadata

## Message

- id (stabil nach Deduplizierung)
- sourceId
- externalFingerprint
- senderId
- timestamp optional
- sequenceIndex
- text
- mediaType optional
- isSystem
- isDeletedPlaceholder
- replyToMessageId optional
- quotedText optional
- originalRaw optional

## MessageBlock

Für Antwort-/Gesprächslogik.

- id
- senderId
- startTimestamp
- endTimestamp
- messageIds[]

## RelationshipContext

- relationshipType
- familyRole optional
- relationshipDurationBucket
- culturalContextText
- communicationStyleText
- additionalContextText
- updatedAt

## LifeEvent

- id
- category
- iconId
- title
- startAt
- endAt optional
- location optional
- note optional
- source: user | ai
- status: suggested | confirmed | rejected
- evidenceIds[]
- confidence optional
- createdAt / updatedAt

## EvidenceItem

- id
- featureId
- classificationType
- messageIds[] oder messageBlockIds[]
- senderId
- startTimestamp
- endTimestamp optional
- previewText
- confidence
- systemClassification
- userClassification optional
- status: included | excluded | user_confirmed | user_reclassified
- exclusionReason optional
- createdAt / updatedAt

## UserCorrection

- id
- chatSpaceId
- featureId
- evidenceId / entityId
- action
- oldValue
- newValue
- reason optional
- createdAt
- revertedAt optional

## AnalysisRun

- id
- chatSpaceId
- period
- featureId
- inputVersion
- algorithmVersion
- status
- resultPayload
- evidenceIds[]
- computedAt
- invalidatedAt optional

## PlanEntity

Für What’s Next / Raincheck.

- id
- chatSpaceId
- title/summary
- participantIds[]
- firstMentionAt
- initiatorId
- state
- evidenceIds[]
- changeHistory[]
- confidence

## DashboardConfig

- chatSpaceId
- orderedFeatureCards[]
- hiddenFeatureCards[]

## PeriodFilter

- preset: all | 7d | 30d | 3m | 12m | custom
- from optional
- to optional

## RecalculationDependency

Empfehlung: Feature-Dependency-Graph pflegen, damit eine Korrektur nicht blind alle Analysen neu berechnet.
Beispiele:
- Frage-Evidence geändert → Wer will mehr wissen? + Question Dynamics invalidieren
- Event/Meeting geändert → Hot & Cold Deep Dive / Life Events / ggf. Relationship Timeline invalidieren
- Plan-Evidence geändert → What’s Next? + Future Talk Trend invalidieren
